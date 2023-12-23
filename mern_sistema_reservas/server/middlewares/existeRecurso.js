import { RecursosModel } from "../models/RecursosModel.js";

export const existeRecurso = async (req, res, next) => {
  try {
    const id_recurso = req.params.id;
    const recurso = await RecursosModel.obtenerRecurso(id_recurso); //Obtención del recurso
    if (!recurso)
      //Validación de existencia del recurso
      return res.status(404).json({ message: "No se encontró el recurso" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
