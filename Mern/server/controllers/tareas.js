import { pool } from "../db.js";

export const obtenerTareas = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tareas ORDER BY fecha ASC"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM tareas WHERE id = ?",
      req.params.id
    );
    //Se comprueba que la lista realmente traiga una tarea
    if (result.length === 0)
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    res.json(result[0]); //Solo retorna la posicion 0, ya que es 'result' es una lista
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const [result] = await pool.query(
      "INSERT INTO tareas(titulo,descripcion) VALUES (?,?)",
      [titulo, descripcion]
    );
    //result.insertId obtenemos el id que se ingreso a la base de datos
    res.json({
      id: result.insertId,
      titulo,
      descripcion,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const actualizarTarea = async (req, res) => {
  try {
    const [result] = await pool.query(
      "UPDATE tareas SET ? WHERE id = ?",
      [req.body, req.params.id] //Se le pase el body que es lo que llega, y el id por parametro
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const eliminarTarea = async (req, res) => {
  try {
    const [result] = await pool.query(
      "DELETE FROM tareas WHERE id = ?",
      req.params.id
    );
    //Se comprueba si no afecto a ninguna de las filas de la base de datos
    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};