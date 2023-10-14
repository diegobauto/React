import { Router } from "express";
import { createNewAccessToken, getUserInfo } from "../controllers/tokens.js";
import { authorization } from "./authorization.js";

const router = Router();

router.post("/api/tokens/", createNewAccessToken);
router.get("/api/tokens/user/", authorization, getUserInfo);

export default router;
