import { Router } from "express";
import { signup, signin, dashboard, signout, getAllUsers } from "../controllers/users.js";
import { authorization, isAdmin } from "../middlewares/authorization.js";

const router = Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.delete("/signout", signout);
router.get("/dashboard/", authorization, dashboard);
router.get("/users", [authorization, isAdmin], getAllUsers)

export default router;
