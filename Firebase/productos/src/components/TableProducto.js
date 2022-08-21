import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component"; //Tabla con DataTable
import { FaPencilAlt } from "react-icons/fa"; // Iconos de React
import { RiDeleteBin5Fill } from "react-icons/ri"; // Iconos de React
import FormProducto from "./FormProducto";
import { toast } from "react-toastify"; //Notificaciones o alertas
import { db } from "./firebase.js"; //Importamos la base de datos de firestore
import { columnas, paginationOptions, customStyles } from "./tablaConfig";

const TableProducto = () => {
  //Estado para los productos y para el id del producto a editar
  const [productos, setProductos] = useState([]);
  const [idEdit, setIdEdit] = useState("");

  //Obtiene los productos una sola vez al cargar la pagina
  useEffect(() => {
    getProducts();
  }, []);

  const addOrEditProduct = async (data) => {
    try {
      data.codigo = data.codigo.toUpperCase(); //Ponemos el codigo en mayuscula para pasarlo a la db
      //Ponemos la primera palabra del nombre en mayuscula para pasarlo a la db
      data.nombre = data.nombre.charAt(0).toUpperCase() + data.nombre.slice(1);
      //Si el idEdit esta vacio simplemente guarda un registro
      if (idEdit === "") {
        //Creamos una colección llamada productos, si ya existe solo agrega el producto
        //Y pasandole la data que vamos a agregar
        await db.collection("productos").doc().set(data);
        //Mostramos un toast satisfactorio cuando se agregue el producto
        toast("Producto agregado correctamente", { type: "success" });
      } else {
        //Sino edita el registro, obteniendo el producto por su id
        //Y pasandole la data que vamos a actualizar
        await db.collection("productos").doc(idEdit).update(data);
        //Mostramos un toast satisfactorio cuando se agregue el producto
        toast("Producto actualizado correctamente", { type: "info" });
      }
    } catch (error) {
      console.error(error);
    }
    setIdEdit(""); //ponemos el 'idEdit' en vacio para indicar que ya no estamos editando
  };

  //Funcion para eliminar un producto por su id
  const deleteProduct = async (id) => {
    //Mostramos una alerta de confirmación, si es 'true' elimina el producto
    if (window.confirm("El producto se eliminará")) {
      //Mostramos un toast de error cuando se elimine el producto
      await db.collection("productos").doc(id).delete();
      toast.error("Producto eliminado correctamente");
    }
  };

  //Funcion para obtener los productos
  const getProducts = async () => {
    //Respuesta que nos da el servidor de firebase
    db.collection("productos").onSnapshot((querySnpashot) => {
      let docs = []; //Lista para almacenar cada producto que obtengo
      let numeral = 1;
      querySnpashot.forEach((doc) => {
        //Guardo el na lista el producto como un componente
        docs.push({
          numeral: numeral,
          id: doc.id,
          ...doc.data(),
          acciones: (
            <>
              <button
                type="button"
                className="btn btn-success mx-1"
                onClick={() => setIdEdit(doc.id)}
              >
                <FaPencilAlt /> {/*Icono de editar*/}
              </button>

              <button
                type="button"
                className="btn btn-danger mx-1"
                onClick={() => deleteProduct(doc.id)}
              >
                <RiDeleteBin5Fill /> {/*Icono de eliminar*/}
              </button>
            </>
          ),
        });
        numeral = numeral + 1;
      });
      setProductos(docs);
    });
  };

  // Retorno del contenido
  return (
    <div className="table-responsive">
      <h2 className="text-center ">Gestionar Productos</h2>
      <FormProducto {...{ addOrEditProduct, idEdit, productos, setIdEdit }} />
      {/* Poner el componente de la tabla con la 'data' de productos*/}
      <DataTable
        columns={columnas}
        data={productos}
        pagination
        paginationComponentOptions={paginationOptions}
        fixedHeader
        fixedHeaderScrollHeight="300px"
        highlightOnHover
        pointerOnHover
        customStyles={customStyles}
      />
    </div>
  );
};

export default TableProducto;
