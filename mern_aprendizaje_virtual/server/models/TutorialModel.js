import { pool } from "../database/db.js";

export class TutorialModel {
    static obtenerUsuarioAleatoriamente = async () => {
        const [usuario] = await pool.query("SELECT * FROM usuarios ORDER BY RAND() LIMIT 1");
        return usuario[0]
    }

    static obtenerTutoriales = async () => {
        const [tutoriales] = await pool.query(
            `SELECT
              T.id_tutorial,
              T.descripcion,
              T.titulo,
              T.estado_publicacion,
              D.fecha_creacion,
              U.nombre AS usuario_creador
            FROM tutoriales AS T
            INNER JOIN detalles AS D ON T.id_tutorial = D.id_tutorial
            INNER JOIN usuarios AS U ON D.id_usuario = U.id_usuario`
        );
        return tutoriales;
    }

    static obtenerTutorial = async (id_tutorial) => {
        const [tutorial] = await pool.query(
            `SELECT
              T.id_tutorial,
              T.descripcion,
              T.titulo,
              T.estado_publicacion,
              D.fecha_creacion,
              U.nombre AS usuario_creador
            FROM tutoriales AS T
            INNER JOIN detalles AS D ON T.id_tutorial = D.id_tutorial
            INNER JOIN usuarios AS U ON D.id_usuario = U.id_usuario
            WHERE T.id_tutorial = (?);`,
            [id_tutorial]
        );
        return tutorial[0];
    }

    static obtenerSoloTutorial = async (id_tutorial) => {
        const [tutorial] = await pool.query("SELECT * FROM tutoriales WHERE id_tutorial = (?)", [id_tutorial]);
        return tutorial[0]
    }

    static crearTutorial = async (titulo, descripcion) => {
        const [result] = await pool.query(
            "INSERT INTO tutoriales (titulo, descripcion) VALUES (?,?)",
            [titulo, descripcion]
        );
        return result;
    }
    
    static crearDetalleTutorial = async (id_tutorial, id_usuario) => {
        const [result] = await pool.query(
            "INSERT INTO detalles (id_tutorial, id_usuario) VALUES (?,?)",
            [id_tutorial, id_usuario]
        );
        return result;
    }

    static actualizarTutorial = async (body, id_tutorial) => {
        const [result] = await pool.query("UPDATE tutoriales SET ? WHERE id_tutorial = (?)", [body, id_tutorial]);
        return result;
    }

    static eliminarTutorial = async (id_tutorial) => {
        const [result] = await pool.query("DELETE FROM tutoriales WHERE id_tutorial = (?)", [id_tutorial]);
        return result;
    }
}