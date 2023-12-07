import { TareaModel } from '../models/TareaModel.js'

export const obtenerTareas = async (req, res) => {
  try {
    const tareas = await TareaModel.obtenerTareas();
    res.json(tareas);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const obtenerTarea = async (req, res) => {
  try {
    const tarea = await TareaModel.obtenerTarea(req.params.id)
    //Se comprueba que realmente traiga una tarea
    if (!tarea) return res.status(404).json({ mensaje: "Tarea no encontrada" });
    res.json(tarea);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const crearTarea = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    const result = await TareaModel.crearTarea(titulo, descripcion);
    //result.insertId obtenemos el id que se ingreso a la base de datos
    res.json({ id: result.insertId, titulo, descripcion });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

export const actualizarTarea = async (req, res) => {
  try {
    //Se le pase el body que es lo que llega, y el id por parametro
    const result = await TareaModel.actualizarTarea(req.body, req.params.id);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

export const eliminarTarea = async (req, res) => {
  try {
    const result = await TareaModel.eliminarTarea(req.params.id);
    //Se comprueba si no afecto a ninguna de las filas de la base de datos
    if (result.affectedRows === 0)
      return res.status(404).json({ mensaje: "Tarea no encontrada" });
    //Este código(204) significa que el servidor ha procesado con éxito la solicitud, 
    //pero no va a devolver ningún contenido
    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};