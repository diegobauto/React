import { Router } from "express";
import { signup, signin, dashboard, signout } from "../controllers/users.js";
import { authorization } from "./authorization.js";

const router = Router();

router.post("/api/users/signup", signup);
router.post("/api/users/signin/", signin);
router.get("/api/users/dashboard/", authorization, dashboard);
router.get("/api/users/signout/", authorization, signout);

export default router;
