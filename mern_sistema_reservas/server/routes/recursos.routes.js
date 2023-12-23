import { Router } from "express";
import {
  obtenerRecurso,
  obtenerRecursos,
  crearRecurso,
  actualizarRecurso,
  eliminarRecurso,
} from "../controllers/recursos.js";
import { existeRecurso } from "../middlewares/existeRecurso.js";

const router = Router();

router.get("/", obtenerRecursos);
router.post("/", crearRecurso);
//Uso del middleware
router.get("/:id", existeRecurso, obtenerRecurso);
router.put("/:id", existeRecurso, actualizarRecurso);
router.delete("/:id", existeRecurso, eliminarRecurso);

export default router;
