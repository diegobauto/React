import { Router } from "express";
import {
  obtenerTareas,
  obtenerTarea,
  crearTarea,
  actualizarTarea,
  eliminarTarea,
} from "../controllers/tareas.js";

const router = Router();

router.get("/", obtenerTareas);
router.get("/:id", obtenerTarea);
router.post("/", crearTarea);
router.put("/:id", actualizarTarea);
router.delete("/:id", eliminarTarea);

export default router;
