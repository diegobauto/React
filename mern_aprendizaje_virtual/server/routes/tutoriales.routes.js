import { Router } from "express";
import {
  crearTutorial,
  obtenerTutoriales,
  obtenerTutorial,
  actualizarTutorial,
  eliminarTutorial,
} from "../controllers/tutoriales.js";
import { existeTutorial } from "../middlewares/middleware.js";

const router = Router();

//Rutas
router.post("/", crearTutorial);
router.get("/", obtenerTutoriales);

//Uso del Middleware
//Comprobación si existe primero el tutorial
router.get("/:id", existeTutorial, obtenerTutorial);
router.put("/:id", existeTutorial, actualizarTutorial);
router.delete("/:id", existeTutorial, eliminarTutorial);

export default router;
