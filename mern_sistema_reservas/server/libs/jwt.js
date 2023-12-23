import jwt from "jsonwebtoken";

//Función para crear un token
export const crearTokenAccesso = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, "secret", { expiresIn: "1d" }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  });
};
