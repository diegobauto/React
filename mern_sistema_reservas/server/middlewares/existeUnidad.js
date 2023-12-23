import { UnidadesModel } from "../models/UnidadesModel.js";

export const existeUnidad = async (req, res, next) => {
  try {
    const id_unidad = req.params.id;
    const unidad = await UnidadesModel.obtenerUnidad(id_unidad); //Obtención de la unidad
    if (!unidad)
      //Validación de existencia de la unidad
      return res.status(404).json({ message: "No se encontró la unidad" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
