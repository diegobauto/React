import { signupShema, signinShema } from "../schemas/auth.schema.js";
import bcryptjs from "bcryptjs";
import { AuthModel } from "../models/AuthModel.js";
import { crearTokenAccesso } from "../libs/jwt.js";

//Registro de usuario
export const signUp = async (req, res) => {
  try {
    const usuarioValidado = signupShema.parse(req.body); //Validación de datos
    const hash = await bcryptjs.hash(usuarioValidado.contrasenia, 10); //Encriptación de la contraseña
    usuarioValidado.contrasenia = hash; //Reemplzo de la contraseña a la encriptada
    await AuthModel.crearUsuario(usuarioValidado); //Creación de usuario
    res.sendStatus(201);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Iniciar sesión
export const signIn = async (req, res) => {
  try {
    const usuarioValidado = signinShema.parse(req.body); //validación de datos

    //Comprobar si el usuario existe
    const user = await AuthModel.obtenerUsuarioPorCorreo(usuarioValidado.correo);
    if (!user)
      return res.status(400).json({ message: "Credenciales no validas" });

    //Validar la contraseña
    const isMatch = user
      ? await bcryptjs.compare(usuarioValidado.contrasenia, user.contrasenia)
      : false;
    if (!isMatch)
      return res.status(400).json({ message: "Credenciales no validas" });

    const token = await crearTokenAccesso({ id_usuario: user.id_usuario }); //Crear el token de accesso (accessToken)
    res.cookie("token", token); //Crear una cookie

    //Responder al cliente con el usuario autenticado
    //Se hace practicamente para no devolver el password
    res.json({
      id_usuario: user.id_usuario,
      nombre_usuario: user.nombre_usuario,
      correo: user.correo,
    });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

//Cerrar sesión
export const signOut = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.sendStatus(200);
};
