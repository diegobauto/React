import { pool } from "../database/db.js";

//Función para la creación de un tutorial
export const crearTutorial = async (req, res) => {
  try {
    //Simulación del usuario autenticado, obtención de usuario de manera aleatoria
    const [usuario] = await pool.query(
      "SELECT * FROM usuarios ORDER BY RAND() LIMIT 1"
    );

    if (usuario.length > 0) {
      const id_usuario = usuario[0].id_usuario;

      const { descripcion, titulo } = req.body;

      if (!descripcion || !titulo) {
        return res.status(500).json({ mensaje: "Los datos son requeridos" });
      }

      const [tutorial] = await pool.query(
        "INSERT INTO tutoriales (descripcion,titulo) VALUES (?,?)",
        [descripcion, titulo]
      );

      if (tutorial.affectedRows == 1) {
        //Un tutorial tiene únicamente un detalle de tutorial
        //A pesar de que el 'id_tutorial' es único en la base de datos, tabla 'detalles', 
        //esto sigue validando que cada tutorial tenga exactamente un detalle de tutorial 
        //y obtener una mejor respuesta por parte del servidor
        const [result] = await pool.query(
          "SELECT * FROM detalles WHERE id_tutorial = (?);",
          [tutorial.insertId]
        );
        if (result.length > 0) {
          return res.status(400).json({ mensaje: "Un tutorial puede tener únicamente un detalle." });
        }

        const [detalle] = await pool.query(
          "INSERT INTO detalles (id_tutorial,id_usuario) VALUES (?,?)",
          [tutorial.insertId, id_usuario]
        );
        if (detalle.affectedRows == 1) {
          return res.status(201).json({ mensaje: "Tutorial añadido exitosamente" });
        } else {
          return res.status(400).json({ mensaje: "Error al añadir un tutorial" });
        }
      } else {
        return res.status(400).json({ mensaje: "Error al añadir un tutorial" });
      }
    } else {
      return res.status(401).json({ mensaje: "Se necesita autenticación" });
    }
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

//Función para obtener todos los tutoriales con su detalle
export const obtenerTutoriales = async (req, res) => {
  try {
    const [result] = await pool.query(
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
    res.json(result);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

//Función para obtener un unico tutorial con su detalle
export const obtenerTutorial = async (req, res) => {
  try {
    const id_tutorial = req.params.id;

    const [result] = await pool.query(
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
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

//Función para actualizar un tutorial
export const actualizarTutorial = async (req, res) => {
  try {
    const id_tutorial = req.params.id;

    const [tutorial] = await pool.query(
      "UPDATE tutoriales SET ? WHERE id_tutorial = (?)",
      [req.body, id_tutorial]
    );
    if (tutorial.affectedRows == 1) {
      res.json({ mensaje: "Tutorial actualizado con exito" });
    } else {
      res.status(400).json({ mensaje: "Tutorial no actualizado" });
    }
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

//Función para eliminar un tutorial
export const eliminarTutorial = async (req, res) => {
  try {
    const id_tutorial = req.params.id;

    const [tutorial] = await pool.query(
      "DELETE FROM `tutoriales` WHERE `id_tutorial` = (?)",
      [id_tutorial]
    );
    
    if (tutorial.affectedRows == 1) {
      res.json({ mensaje: "Tutorial eliminado con exito" });
    } else {
      res.status(400).json({ mensaje: "Tutorial no eliminado" });
    }
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
