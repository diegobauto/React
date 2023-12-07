import { pool } from "../database/db.js";

export class TareaModel {
    static obtenerTareas = async () => {
        const [result] = await pool.query("SELECT * FROM tareas ORDER BY fecha ASC");
        return result;
    }

    //Solo retorna la posicion 0, ya que es 'result' es una lista
    static obtenerTarea = async (id) => {
        const [result] = await pool.query("SELECT * FROM tareas WHERE id = (?)", [id]);
        return result[0];
    }

    static crearTarea = async (titulo, descripcion) => {
        const [result] = await pool.query("INSERT INTO tareas(titulo,descripcion) VALUES (?,?)", [titulo, descripcion]);
        return result;
    }

    static actualizarTarea = async (body, id) => {
        const [result] = await pool.query("UPDATE tareas SET ? WHERE id = (?)", [body, id]);
        return result;
    }

    static eliminarTarea = async (id) => {
        const [result] = await pool.query("DELETE FROM tareas WHERE id = (?)", [id]);
        return result;
    }
}