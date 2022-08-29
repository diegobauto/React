import { Router } from "express";
import {
  obtenerTareas,
  obtenerTarea,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
} from "../controllers/tareas.js";

const router = Router();
router.get("/tareas", obtenerTareas);
router.get("/tareas/:id", obtenerTarea);
router.post("/tareas", crearTarea);
router.put("/tareas/:id", actualizarTarea);
router.delete("/tareas/:id", eliminarTarea);

export default router;
