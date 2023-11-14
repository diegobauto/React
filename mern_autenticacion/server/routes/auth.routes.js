import { Router } from "express";
import {
  signIn,
  signOut,
  signUp,
  getUser,
} from "../controllers/auth.js";
import { verifyToken } from "../middlewares/verifyToken.js";

const router = Router();

//Rutas principales
router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/signout", signOut);
router.get("/profile", verifyToken, getUser);

export default router;
