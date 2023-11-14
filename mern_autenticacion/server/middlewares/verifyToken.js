import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";
import { pool } from "../database/db.js";

//Middleware
//Verificar un token
//Que ademas de que exista un token en jwt, el id obtenido este en la BD (osea que si sea de un usuario)
export const verifyToken = (req, res, next) => {
  try {
    //Obtener las cookies, especificamente la cookie "token"
    const { token } = req.cookies;
    if (!token) {
      return res
        .status(401)
        .json({ message: "No hay token, autorización denegada" });
    }

    //Comprobar que el token sea valido
    jwt.verify(token, TOKEN_SECRET, async (error, dataInJWT) => {
      if (error) { //Al ocurrir cuaalquier erro respecto al token con jwt
        return res.status(401).json({ message: "Token invalido" });
      }

      //Si no hay errores devuelve lo que se guardo en jwt con el token
      //Busca si ese id que se guardo es perteneciente a un usuario
      const [response] = await pool.query(
        "SELECT * FROM users WHERE id_user = (?)",
        [dataInJWT.id_user]
      );
      if (!response[0]) {
        return res.status(400).json({ message: "Usuario no encontrado" });
      }

      //Guardar en una variable los valores que se quieren enviar al cliente
      //Se hace practicamente para no devolver el password
      const user = {
        id_user: response[0].id_user,
        name: response[0].name,
        email: response[0].email,
      };

      req.user_save = user; //Guardar el usuario en una variable local en req
      next(); //Continuar con la siguiente petición
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
