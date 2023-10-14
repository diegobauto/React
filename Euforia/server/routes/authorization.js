import { verifyAccessToken } from "../tokens/tokens.js";

export const authorization = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    const decoded = verifyAccessToken(token);
    if (decoded) {
      req.user = decoded;
      next();
    } else {
      res.status(401).json({ mensaje: "No se proporciona token" });
    }
  } else {
    res.status(401).json({ mensaje: "No se proporciona token" });
  }
};
