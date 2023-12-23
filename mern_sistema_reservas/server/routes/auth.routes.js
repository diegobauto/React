import { Router } from "express";
import { signUp, signIn, signOut } from "../controllers/auth.js";

const router = Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/signOut", signOut);

export default router;
