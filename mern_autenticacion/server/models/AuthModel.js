import { pool } from "../database/db.js";

//El modelo se crea por si depronto se migra a otra DB, se puede utilizar el mismo contrato
//de las funciones y funcione de igual manera en los controladores (controllers)
// Patrón arquitectura: MVC (modelo, vista, controlador)
export class AuthModel {
  //Modelo para obtener un usuario de la base de datos
  static getUserbyEmail = async (email) => {
    const [user] = await pool.query("SELECT * FROM users WHERE email = (?)", [
      email,
    ]);
    return user[0];
  };

  static createUser = async (name, email, hash) => {
    //Modelo para insertar un usuario en la base de datos
    return await pool.query(
      "INSERT INTO users (name, email, password) VALUES  (?,?,?)",
      [name, email, hash]
    );
  };
}
