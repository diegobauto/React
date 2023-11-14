import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

//Función para crear un token
export const createAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, TOKEN_SECRET, { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
