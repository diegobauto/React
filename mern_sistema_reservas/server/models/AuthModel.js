import { pool } from "../database/db.js";

export class AuthModel {
  static crearUsuario = async ({nombre_usuario, correo, contrasenia}) => {
    const [result] = await pool.query(
      "INSERT INTO usuarios (`nombre_usuario`, `correo`, `contrasenia`) VALUES (?, ?, ?)",
      [nombre_usuario, correo, contrasenia]
    );
    return result;
  };

  static obtenerUsuarioPorCorreo = async (correo) => {
    const [user] = await pool.query("SELECT * FROM usuarios WHERE correo = (?)", [correo])
    return user[0];
  }
}
