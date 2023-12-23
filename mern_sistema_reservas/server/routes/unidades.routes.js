import { Router } from "express";
import {
  obtenerUnidad,
  obtenerUnidades,
  crearUnidad,
  actualizarUnidad,
  eliminarUnidad,
} from "../controllers/unidades.js";
import { existeUnidad } from "../middlewares/existeUnidad.js";

const router = Router();

router.get("/", obtenerUnidades);
router.post("/", crearUnidad);
//Uso del middleware
router.get("/:id", existeUnidad, obtenerUnidad);
router.put("/:id", existeUnidad, actualizarUnidad);
router.delete("/:id", existeUnidad, eliminarUnidad);

export default router;
