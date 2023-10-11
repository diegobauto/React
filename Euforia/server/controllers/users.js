import { pool } from "../database/db.js";
import bcrypt from "bcrypt";

export const crearUsuario = async (req, res) => {
  try {
    const { nombre, correo, contrasena } = req.body;

    //Validación de los campos necesarios para la creación del usuario
    if (!nombre || !correo || !contrasena) {
      return res.status(400).json({ error: "Valores no definidos" });
    }

    const hash = await bcrypt.hash(contrasena, 10); //Encriptar la contraseña
    const [result] = await pool.query(
      "INSERT INTO `usuario` (`nombre`, `correo`, `contrasena`) VALUES (?, ?, ?);",
      [nombre, correo, hash]
    );

    //Si se afecto una(1) fila en la base de datos es porque si se creo el registro
    return result.affectedRows === 1
      ? res.status(200).json({ mensaje: "Usuario creado" }) //Si se creo, mostramos estado -> Solicitud aceptada
      : res.status(400).json({ mensaje: "Usuario no creado" }); //Sino, mostramos estado -> Solicitud incorrecta
  } catch (error) {
    return res.status(500).json({ mensaje: error.message }); //Error interno del servidor
  }
};

export const iniciarSesion = async (req, res) => {
  try {
    const { correo, contrasena } = req.body;

    //Validación de los campos necesarios para la creación del usuario
    if (!correo || !contrasena) {
      return res.status(400).json({ error: "Valores no definidos" });
    }

    const [result] = await pool.query(
      "SELECT * FROM `usuario` WHERE `correo` = ?",
      [correo]
    );
    const hash = result[0].contrasena; //Se obtiene la contraseña encriptada del usuario
    const coinciden = await bcrypt.compare(contrasena, hash); //Se comparan las contraseñas

    if (!coinciden) {
      //Si las contraseñas no coinciden, mostramos estado -> Solicitud incorrecta
      return res.status(400).json({ error: "Contraseña incorrecta" });
    }

    res.send(true);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message }); //Error interno del servidor
  }
};

export const refreshToken = (req, res) => {
  res.send("refreshToken");
};

export const cerrarSesion = (req, res) => {
  res.send("cerrarSesion");
};
