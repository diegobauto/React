import { pool } from "../database/db.js";

//Funcion para comprobar que existe un tutorial en la base de datos
export const existeTutorial = async (req, res, next) => {
  try {
    const id_tutorial = req.params.id;

    const [tutorial] = await pool.query(
      "SELECT * FROM `tutoriales` WHERE `id_tutorial` = (?)",
      [id_tutorial]
    );

    if (tutorial.length == 0) {
      return res.status(404).json({ mensaje: "Tutorial no encontrado" });
    }
    next(); //Continuar con la siguiente petición
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
