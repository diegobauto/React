import { RecursosModel } from "../models/RecursosModel.js";
import {
  auditorioSchema,
  laboratorioSchema,
  salonSchema,
} from "../schemas/recursos.shemas.js";

export const obtenerRecurso = async (req, res) => {
  try {
    const id_recurso = req.params.id;
    const recurso = await RecursosModel.obtenerRecurso(id_recurso); //Obtención del recurso
    res.json(recurso);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const obtenerRecursos = async (req, res) => {
  try {
    const recursos = await RecursosModel.obtenerRecursos(); //Obtención de todos los recursos
    if (recursos.length == 0)
      return res.json({ message: "No hay recursos disponibles" });
    res.json(recursos);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const crearRecurso = async (req, res) => {
  let id_recurso; // Variable para almacenar el ID del recurso creado

  try {
    const tipoRecursos = {
      Auditorio: {
        schema: auditorioSchema,
        crear: RecursosModel.crearRecursoAuditorio,
      },
      Laboratorio: {
        schema: laboratorioSchema,
        crear: RecursosModel.crearRecursoLaboratorio,
      },
      Salon: {
        schema: salonSchema,
        crear: RecursosModel.crearRecursoSalon,
      },
    };

    const tipo = req.body.tipo;

    const recursoInfo =
      tipo === "Salón" ? tipoRecursos["Salon"] : tipoRecursos[tipo];

    if (!recursoInfo) {
      return res.status(400).json({ message: "Tipo de recurso no válido" });
    }

    const recursoValidado = recursoInfo.schema.parse(req.body);
    const result = await RecursosModel.crearRecurso(recursoValidado); //Creación del recurso

    if (result.affectedRows !== 1) {
      //Validación de creación exitosa
      return res.status(400).json({ message: "No se pudo crear el recurso" });
    }

    id_recurso = result.insertId; //Id del recurso creado
    //Creación del recurso según el tipo
    const resultTipoRecurso =
      tipo === "Salón"
        ? await recursoInfo.crear(id_recurso)
        : await recursoInfo.crear(recursoValidado, id_recurso);

    //Validación de creación exitosa
    if (resultTipoRecurso.affectedRows !== 1) {
      await RecursosModel.eliminarRecurso(id_recurso);
      return res.status(400).json({ message: "No se pudo crear el recurso" });
    }

    const promises = recursoValidado.horario.map(async (dia) => {
      try {
        await RecursosModel.crearHorarioRecurso(dia, id_recurso); //Creación del horario del recurso
        return null; // Indica que la creacrión fue exitosa para este día
      } catch (error) {
        return `Error en la creación del horario para ${dia.dia_semana}`;
      }
    });

    //Espera a que todas las operaciones de actualización de horario se completen
    const errors = await Promise.all(promises);
    const hasError = errors.some((error) => error !== null);

    // Si hay errores en la creación del horario, enviamos la respuesta de error aquí
    if (hasError) {
      return res
        .status(400)
        .json({ message: "No se pudo crear el horario del recurso" });
    }

    res.sendStatus(200);
  } catch (error) {
    // Si se creó el recurso pero hubo un error al crear el horario, elimina el recurso
    if (id_recurso) {
      await RecursosModel.eliminarRecurso(id_recurso);
    }
    res.status(500).json({ message: error });
  }
};

export const actualizarRecurso = async (req, res) => {
  try {
    const id_recurso = req.params.id;
    const recursoValidado = recursoSheme.parse(req.body); //Validación de datos
    const result = await RecursosModel.actualizarRecurso(
      recursoValidado,
      id_recurso
    ); //Actualización del recurso

    if (result.affectedRows != 1) {
      //Validación de actualización exitosa
      return res
        .status(400)
        .json({ message: "No se pudo actualizar el recurso" });
    }

    const promises = recursoValidado.horario.map(async (dia) => {
      try {
        await RecursosModel.actualizarHorarioRecurso(dia, id_recurso); // Actualización del horario del recurso
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
        .json({ message: "No se pudo actualizar el horario del recurso" });
    }

    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const eliminarRecurso = async (req, res) => {
  try {
    const id_recurso = req.params.id;
    const result = await RecursosModel.eliminarRecurso(id_recurso);
    if (result.affectedRows != 1)
      return res
        .status(400)
        .json({ message: "No se pudo eliminar el recurso" });
    res.sendStatus(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
