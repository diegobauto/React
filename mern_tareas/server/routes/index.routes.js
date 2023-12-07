import { Router } from "express";
import { pool } from "../database/db.js";

const router = Router();

//Función que hace una consulta X para validar que este funcionando el 'pool'
router.get("/", async (req, res) => {
  const [rows] = await pool.query("SELECT 1 + 1 as result");
  res.json(rows[0]);
});

export default router;
