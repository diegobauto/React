import { pool } from "../database/db.js";

export class UnidadesModel {
  static obtenerUnidad = async (id) => {
    const [unidad] = await pool.query(
      "SELECT * FROM unidades WHERE id_unidad = (?)",
      [id]
    );
    return unidad[0];
  };

  static obtenerUnidades = async () => {
    const [unidades] = await pool.query("SELECT * FROM unidades");
    return unidades;
  };

  static crearUnidad = async ({ nombre, tiempo_min }) => {
    const [result] = await pool.query(
      "INSERT INTO unidades (nombre, tiempo_min) VALUES (?, ?)",
      [nombre, tiempo_min]
    );
    return result;
  };

  static crearHorarioUnidad = async (
    { dia_semana, hora_apertura, hora_cierre },
    id_unidad
  ) => {
    const [result] = await pool.query(
      "INSERT INTO horarios_unidades (dia_semana, hora_apertura, hora_cierre, id_unidad) VALUES (?, ?, ?, ?)",
      [dia_semana, hora_apertura, hora_cierre, id_unidad]
    );
    return result;
  };

  static actualizarUnidad = async ({ nombre, tiempo_min }, id_unidad) => {
    const [result] = await pool.query(
      "UPDATE unidades SET nombre = (?), tiempo_min = (?) WHERE id_unidad = (?)",
      [nombre, tiempo_min, id_unidad]
    );
    return result;
  };

  static actualizarHorarioUnidad = async (
    { dia_semana, hora_apertura, hora_cierre },
    id_unidad
  ) => {
    const [result] = await pool.query(
      "UPDATE horarios_unidades SET hora_apertura = (?), hora_cierre = (?)  WHERE id_unidad = (?) AND dia_semana = (?)",
      [hora_apertura, hora_cierre, id_unidad, dia_semana]
    );
    return result;
  };

  static eliminarUnidad = async (id_unidad) => {
    const [result] = await pool.query(
      "DELETE FROM unidades WHERE id_unidad = (?)",
      [id_unidad]
    );
    return result;
  };
}
