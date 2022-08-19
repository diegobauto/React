import { useEffect, useState } from "react";
import "./App.css";
import Formulario from "./components/Formulario";
import ListaTareas from "./components/ListaTareas";
import Realizado from "./components/Realizado";

function App() {
  //Estado para el listado de tareas
  const [listaTareas, setListaTareas] = useState([]);

  //Estado para saber el estado de un checbox
  const [tareasRealizadas, setTareasRealizadas] = useState(false);

  //Toma la lista que esta en el localStorage (si hay)
  //Esto solo lo hace al inicar este componente
  useEffect(() => {
    const data = localStorage.getItem("tareas");
    if (data) {
      setListaTareas(JSON.parse(data));
    }
  }, []); //Para que sea solo una vez se le pasa una lista vacia

  //Actualiza el localStorage al haber cambios en 'listaTareas'
  useEffect(() => {
    //Guardamos el listado de tareas en el localStorage (Almacenamiento en la web)
    //Se convierte a un string para que se pueda guardar
    localStorage.setItem("tareas", JSON.stringify(listaTareas));
  }, [listaTareas]); //useEffect escucha si hay cambios en la variable (listaTareas)

  //Funcion para crear una nueva tarea
  const crearTarea = (nombreTarea) => {
    if (!listaTareas.find((tarea) => tarea.nombre === nombreTarea)) {
      //Con los tres puntos se le indica que guarde lo que tenia la lista
      //Y ademas añada lo que se pone despues de la coma
      setListaTareas([...listaTareas, { nombre: nombreTarea, hecho: false }]);
    }
  };

  //Funcion para limpiar las tareas que ya estan completadas
  const limpiarTareas = () => {
    if (window.confirm("¿Seguro que desea limpiar las tareas realizadas?")) {
      setListaTareas(listaTareas.filter((tarea) => !tarea.hecho));
    }
    setTareasRealizadas(false) //Actualizar el check de las tareasRealizadas ya que se borran
  };

  //Funcion que permite actualizar el estado check de la tarea en la lista de tareas
  //Invierte el estado
  const alternarTarea = (nombreTarea) => {
    setListaTareas(
      listaTareas.map((tarea) =>
        //Con los tres puntos se le indica que guarde lo que tenia el objeto
        //modificando unicamente el valor de hecho, alternandolo
        tarea.nombre === nombreTarea ? { ...tarea, hecho: !tarea.hecho } : tarea
      )
    );
  };

  return (
    <div className="App">
      <Formulario crearTarea={crearTarea} />

      <div>
        <h1 className="tituloListado">Listado de tareas</h1>
        <ListaTareas listaTareas={listaTareas} alternarTarea={alternarTarea} />
      </div>

      <div>
        {/* envia por props tareasRealizadas para cambiar el checked de las tareas realizadas
        la lista de tareas y la funcion para cambiar el estado del check de las tareas realizadas*/}
        <Realizado
          tareasRealizadas={tareasRealizadas}
          limpiarTareas={limpiarTareas}
          setTareasRealizadas={setTareasRealizadas}
        />

        {tareasRealizadas && (
          // envia por props la lista de tareas, la funcion para cambiar el estado del check de una tarea
          // y las tareasRealizadas para alternar el check
          <>
            <ListaTareas
              listaTareas={listaTareas}
              alternarTarea={alternarTarea}
              tareasRealizadas={tareasRealizadas}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
