import { pool } from "../database/db.js";

export class RecursosModel {
  static obtenerRecurso = async (id) => {
    const [recurso] = await pool.query(
      "SELECT * FROM recursos WHERE id_recurso = (?)",
      [id]
    );
    return recurso[0];
  };

  static obtenerRecursos = async () => {
    const [recursos] = await pool.query("SELECT * FROM recursos");
    return recursos;
  };

  static crearRecurso = async ({ nombre, descripcion, capacidad }) => {
    const [result] = await pool.query(
      "INSERT INTO recursos (nombre, descripcion, capacidad) VALUES (?, ?, ?)",
      [nombre, descripcion, capacidad]
    );
    return result;
  };

  static crearRecursoAuditorio = async ({ tipo_sillas }, id_recurso) => {
    const [result] = await pool.query(
      "INSERT INTO auditorios (id_recurso, tipo_sillas) VALUES (?, ?)",
      [id_recurso, tipo_sillas]
    );
    return result;
  };

  static crearRecursoLaboratorio = async ({ tipo_mesas }, id_recurso) => {
    const [result] = await pool.query(
      "INSERT INTO laboratorios (id_recurso, tipo_mesas) VALUES (?, ?)",
      [id_recurso, tipo_mesas]
    );
    return result;
  };

  static crearRecursoSalon = async (id_recurso) => {
    const [result] = await pool.query(
      "INSERT INTO salones (id_recurso) VALUES (?)",
      [id_recurso]
    );
    return result;
  };

  static crearHorarioRecurso = async (
    { dia_semana, hora_apertura, hora_cierre },
    id_recurso
  ) => {
    const [result] = await pool.query(
      "INSERT INTO horarios_recursos (dia_semana, hora_apertura, hora_cierre, id_recurso) VALUES (?, ?, ?, ?)",
      [dia_semana, hora_apertura, hora_cierre, id_recurso]
    );
    return result;
  };

  static actualizarRecurso = async (
    { nombre, descripcion, capacidad },
    id_recurso
  ) => {
    const [result] = await pool.query(
      "UPDATE recursos SET nombre = (?), descripcion = (?), capacidad = (?) WHERE id_recurso = (?)",
      [nombre, descripcion, capacidad, id_recurso]
    );
    return result;
  };

  static actualizarHorarioRecurso = async (
    { dia_semana, hora_apertura, hora_cierre },
    id_recurso
  ) => {
    const [result] = await pool.query(
      "UPDATE horarios_recursos SET hora_apertura = (?), hora_cierre = (?)  WHERE id_recurso = (?) AND dia_semana = (?)",
      [hora_apertura, hora_cierre, id_recurso, dia_semana]
    );
    return result;
  };

  static eliminarRecurso = async (id_recurso) => {
    const [result] = await pool.query(
      "DELETE FROM recursos WHERE id_recurso = (?)",
      [id_recurso]
    );
    return result;
  };
}
