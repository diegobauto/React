import bcryptjs from "bcryptjs";
import { AuthModel } from "../models/AuthModel.js";
import { createAccessToken } from "../libs/jwt.js";

//Registro de usuario
export const signUp = async (req, res) => {
  try {
    //Valores que llegan por un cliente
    const { name, email, password } = req.body;

    //Comprobar los valores que llegan que sean validos
    //Se podria hacer una mejor validación (zod)
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Los datos son requeridos" });
    }

    //Validar que no exista el email en la base de datos
    const user = await AuthModel.getUserbyEmail(email);
    if (user)
      return res.status(400).json({ message: "El email ya esta en uso" });

    //Encriptar la contraseña
    const hash = await bcryptjs.hash(password, 10);

    //Crear el usuario en la base de datos
    await AuthModel.createUser(name, email, hash);

    //Se podria validar si realmente se inserto un registro en la bd (affectRows)

    //Responder al cliente (recurso creado)
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Iniciar sesión
export const signIn = async (req, res) => {
  try {
    //Valores que llegan por un cliente
    const { email, password } = req.body;

    //Comprobar los valores que llegan que sean validos
    //Se podria hacer una mejor validación (zod)
    if (!email || !password)
      return res.status(400).json({ message: "Los datos son requeridos" });

    //Validar que exista el usuario en la base de datos
    const user = await AuthModel.getUserbyEmail(email);

    //Validar la contraseña
    const isMatch = user
      ? await bcryptjs.compare(password, user.password)
      : false;
    if (!isMatch) {
      return res.status(400).json({ message: "Credenciales invalidas" });
    }

    //Crear el token de accesso (accessToken)
    const token = await createAccessToken({ id_user: user.id_user });

    //Crear una cookie
    res.cookie("token", token);

    //Responder al cliente con el usuario autenticado
    //Se hace practicamente para no devolver el password
    res.json({
      id_user: user.id_user,
      name: user.name,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Cerrar sesión
export const signOut = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.sendStatus(200);
};

//Obtener el usuario autenticado
//Gracias al req.user_save se puede obtener el usuario
//Con lo que se podria relacionar con otras tablas y con el id hacer una consulta
//de acuerdo a la relación que tenga con la otra tabla
export const getUser = (req, res) => {
  res.json(req.user_save);
};
