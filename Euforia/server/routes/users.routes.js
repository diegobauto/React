import { Router } from "express";
import { crearUsuario, iniciarSesion, refreshToken, cerrarSesion } from "../controllers/users.js";

const router = Router();

router.post("/api/users/signup", crearUsuario);
router.post("/api/users/signin/", iniciarSesion);
router.get("/api/users/refresh-token/", refreshToken);
router.get("/api/users/signout/", cerrarSesion);

export default router;
