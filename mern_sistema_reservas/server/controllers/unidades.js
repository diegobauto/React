import { UnidadesModel } from "../models/UnidadesModel.js";
import { unidadShema } from "../schemas/unidades.shemas.js";

export const obtenerUnidad = async (req, res) => {
  try {
    const id_unidad = req.params.id;
    const unidad = await UnidadesModel.obtenerUnidad(id_unidad); //Obtención de la unidad
    res.json(unidad);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const obtenerUnidades = async (req, res) => {
  try {
    const unidades = await UnidadesModel.obtenerUnidades(); //Obtención de todas las unidades
    if (unidades.length == 0)
      return res.json({ message: "No hay unidades disponibles" });
    res.json(unidades);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const crearUnidad = async (req, res) => {
  let id_unidad; // Variable para almacenar el ID de la unidad creada
  try {
    const unidadValidada = unidadShema.parse(req.body); //Validación de datos
    const result = await UnidadesModel.crearUnidad(unidadValidada); //Creación de la unidad

    if (result.affectedRows != 1) {
      //Validación de creación exitosa
      return res.status(400).json({ message: "No se pudo crear la unidad" });
    }

    id_unidad = result.insertId; //Id de al unidad creada

    const promises = unidadValidada.horario.map(async (dia) => {
      try {
        await UnidadesModel.crearHorarioUnidad(dia, id_unidad); //Creación del horario de la unidad
        return null; // Indica que la creacrión fue exitosa para este día
      } catch (error) {
        return `Error en la creación del horario para ${dia.dia_semana}`;
      }
    });

    const errors = await Promise.all(promises); //Espera a que todas las operaciones de actualización de horario se completen
    const hasError = errors.some((error) => error !== null);
    if (hasError) {
      // Si hay errores en la creación del horario, enviamos la respuesta de error aquí
      return res
        .status(400)
        .json({ message: "No se pudo crear el horario de la unidad" });
    }

    res.sendStatus(200);
  } catch (error) {
    if (id_unidad) {
      // Si se creó la unidad pero hubo un error al crear el horario, elimina la unidad
      await UnidadesModel.eliminarUnidad(id_unidad);
    }
    res.status(500).json({ message: error });
  }
};

export const actualizarUnidad = async (req, res) => {
  try {
    const id_unidad = req.params.id;
    const unidadValidada = unidadShema.parse(req.body); //Validación de datos
    const result = await UnidadesModel.actualizarUnidad(
      unidadValidada,
      id_unidad
    ); //Actualización de la unidad

    if (result.affectedRows != 1) {
      //Validación de actualización exitosa
      return res
        .status(400)
        .json({ message: "No se pudo actualizar la unidad" });
    }

    const promises = unidadValidada.horario.map(async (dia) => {
      try {
        await UnidadesModel.actualizarHorarioUnidad(dia, id_unidad); // Actualización del horario de la unidad
        return null; // Indica que la actualización fue exitosa para este día
      } catch (error) {
        return `Error en la actualización del horario para ${dia.dia_semana}`;
      }
    });

    const errors = await Promise.all(promises); //Espera a que todas las operaciones de actualización de horario se completen
    const hasError = errors.some((error) => error !== null);
    if (hasError) {
      // Si hay errores en la actualización del horario, enviamos la respuesta de error aquí
      return res
        .status(400)
        .json({ message: "No se pudo actualizar el horario de la unidad" });
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const eliminarUnidad = async (req, res) => {
  try {
    const id_unidad = req.params.id;
    const result = await UnidadesModel.eliminarUnidad(id_unidad);
    if (result.affectedRows != 1)
      return res.status(400).json({ message: "No se pudo eliminar la unidad" });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
