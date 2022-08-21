import React, {useEffect, useState} from "react";

import WithSortingComponent from "./tablaProductos"
import FormProducto from "./FormProducto";

import {FaPencilAlt} from 'react-icons/fa'; // Iconos de React
import {RiDeleteBin5Fill} from 'react-icons/ri'; // Iconos de React
import {
    actualizarDocumentoDatabase,
    consultarDatabase,
    eliminarDocumentoDatabase,
    guardarDatabase
} from "../firebase.js" //Importamos la base de datos de firestore
import {toast} from "react-toastify"; //Importamos toast para los mensajes

const Tabla = () => {
    const [productos, setProductos] = useState([]);
    const [idEdit, setIdEdit] = useState("");

    const addOrEditProduct = async (data) => {
        try {
            //Ponemos el codigo en mayuscula para pasarlo a la db
            data.codigo = data.codigo.toUpperCase();
            //Ponemos la primera palabra del nombre en mayuscula para pasarlo a la db
            data.nombre = data.nombre.charAt(0).toUpperCase() + data.nombre.slice(1);

            //Si el idEdit esta vacio simplemente guarda un registro
            if (idEdit === "") {
                await guardarDatabase("productos", data); //Creamos una colección

                //Añadimos un toast cuando se agregue el producto
                toast("Producto agregado correctamente", {type: "success"});
            } else { //Si no edita el registro
                await actualizarDocumentoDatabase("productos", data);
                //Añadimos un toast cuando se agregue el producto
                toast("Producto actualizado correctamente", {type: "info"});
            }
        } catch (error) {
            console.error(error);
        }
        setIdEdit(""); //ponemos el idEdit en vacio para indicar que ya no estamos editando
    }

    //Eliminar producto
    const deleteProduct = async (id) => {
        if (window.confirm("El producto se eliminará")) {
            await eliminarDocumentoDatabase("productos", id)
            toast.error("Producto eliminado correctamente")
        }
    }

    //Obtener los productos
    const getProducts = async () => {
        //Respuesta que nos da el servidor de firebase
        // db.collection("productos").onSnapshot((querySnpashot) => {
        //     const docs = [];
        //     querySnpashot.forEach(doc => {
        //         docs.push({
        //             id: doc.id,
        //             ...doc.data(),
        //             acciones:
        //                 <>
        //                     <button
        //                         type="button"
        //                         className="btn btn-success mx-1"
        //                         onClick={() => setIdEdit(doc.id)}
        //                     ><FaPencilAlt/>
        //                     </button>
        //
        //                     <button
        //                         type="button"
        //                         className="btn btn-danger mx-1"
        //                         onClick={() => deleteProduct(doc.id)}
        //                     ><RiDeleteBin5Fill/>
        //                     </button>
        //                 </>
        //         })
        //     })
        //     setProductos(docs)
        // });
        const listaProductos = await consultarDatabase("productos")
        setProductos(listaProductos)
    }

    useEffect(() => {
        // getProducts();
        consultarDatabase("productos")
            .then(data => setProductos(data))
    }, [setProductos]);

    // Retorno del contenido
    return (
        <>
            <h2 className="text-center">Gestionar Productos</h2>
            <FormProducto {...{addOrEditProduct, idEdit, productos, setIdEdit}}/>
            <WithSortingComponent valor={productos}/>
        </>
    );
}

export default Tabla;