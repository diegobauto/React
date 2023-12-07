import { TutorialModel } from '../models/TutorialModel.js'

//Función para crear un tutorial
export const crearTutorial = async (req, res) => {
  try {
    const { titulo, descripcion } = req.body;
    if (!titulo || !descripcion)
      return res.status(500).json({ mensaje: "Los datos son requeridos" });

    //Simulación del usuario autenticado, obtención de usuario de manera aleatoria
    const usuario = await TutorialModel.obtenerUsuarioAleatoriamente();
    if (!usuario)
      return res.status(401).json({ mensaje: "Se necesita autenticación" });
    const id_usuario = usuario.id_usuario;

    //Creación y validación que tutorial y detalle se haya insertado correctamente
    const resultTutorial = await TutorialModel.crearTutorial(titulo, descripcion);
    const id_tutorial = resultTutorial.insertId;
    const resultDetalle = await TutorialModel.crearDetalleTutorial(id_tutorial, id_usuario);
    if (resultTutorial.affectedRows === 0 || resultDetalle.affectedRows === 0)
      return res.status(400).json({ mensaje: "Error al añadir un tutorial" });
    
    return res.status(201).json({ mensaje: "Tutorial añadido exitosamente" });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

//Función para obtener todos los tutoriales con su detalle
export const obtenerTutoriales = async (req, res) => {
  try {
    const tutoriales = await TutorialModel.obtenerTutoriales();
    res.json(tutoriales);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

//Función para obtener un tutorial con su detalle
export const obtenerTutorial = async (req, res) => {
  try {
    const id_tutorial = req.params.id;
    const tutorial = await TutorialModel.obtenerTutorial(id_tutorial);
    res.json(tutorial);
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

//Función para actualizar un tutorial
export const actualizarTutorial = async (req, res) => {
  try {
    const id_tutorial = req.params.id;
    const result = await TutorialModel.actualizarTutorial(req.body, id_tutorial);
    if (result.affectedRows === 0)
      return res.status(400).json({ mensaje: "Tutorial no actualizado" });
    res.json({ mensaje: "Tutorial actualizado con exito" });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};

//Función para eliminar un tutorial
export const eliminarTutorial = async (req, res) => {
  try {
    const id_tutorial = req.params.id;
    const result = await TutorialModel.eliminarTutorial(id_tutorial);
    if (result.affectedRows === 0)
      return res.status(400).json({ mensaje: "Tutorial no eliminado" });
    res.json({ mensaje: "Tutorial eliminado con exito" });
  } catch (error) {
    return res.status(500).json({ mensaje: error.message });
  }
};
