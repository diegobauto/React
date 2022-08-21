import React, {useEffect, useState} from "react";

//Tabla con DataTable
import DataTable from 'react-data-table-component';

// Iconos de React
import { FaPencilAlt } from 'react-icons/fa';
import { RiDeleteBin5Fill } from 'react-icons/ri';
import FormProducto from "./FormProducto";

//Importamos la base de datos de firestore
import {db} from "./firebase.js"

import { toast } from "react-toastify";

const TableProducto = () => {
    const [productos, setProductos] = useState([]);
    const [idEdit, setIdEdit] = useState("");

    const addOrEditProduct = async (data) => {
        try {
            //Si el idEdit esta vacion simplemente guarda un registro

            //Ponemos el codigo en mayuscula para pasarlo a la db
            data.codigo = data.codigo.toUpperCase();
            //Ponemos la primera palabra del nombre en mayuscula para pasarlo a la db
            data.nombre = data.nombre.charAt(0).toUpperCase() + data.nombre.slice(1);

            if(idEdit === ""){
                //Creamos una colección
                await db.collection("productos").doc().set(data);

                //Añadimos un toast cuando se agregue el producto
                toast("Producto agregado correctamente", {type:"success"});
            }
            else{ //Sino edita el registro
                await db.collection("productos").doc(idEdit).update(data);
                //Añadimos un toast cuando se agregue el producto
                toast("Producto actualizado correctamente", {type:"info"});
            }
        } catch (error) {
            console.error(error);
        }
        setIdEdit(""); //ponemos el idEdit en vacio para indicar que ya no estamos editando
    }

    const deleteProduct = async (id) => {
        if(window.confirm("El producto se eliminará")){
            await db.collection("productos").doc(id).delete()
            toast.error("Producto eliminado correctamente")
        }
    }

    const getProducts = async () =>{
        //Respuesta que nos da el servidor de firebase
        db.collection("productos").onSnapshot((querySnpashot) =>{
            const docs = [];
            let numeral = 1;
            querySnpashot.forEach(doc => {
                docs.push(
                    {
                        numeral:numeral,
                        id:doc.id,
                        ...doc.data(),
                        acciones:
                        <>
                            <button 
                                type="button" 
                                className="btn btn-success mx-1"
                                onClick = {() => setIdEdit(doc.id)}
                            ><FaPencilAlt/>
                            </button>
                            
                            <button 
                                type="button" 
                                className="btn btn-danger mx-1" 
                                onClick={() => deleteProduct(doc.id)}
                            ><RiDeleteBin5Fill/>
                            </button>
                        </> 
                    })
                numeral=numeral+1;
            })
            setProductos(docs)
        });
    }

    useEffect(() =>{
        getProducts();
    }, []);
    
    // Distribución de mis columnas
    const columnas = [
        {name:"ID", selector: row => row["numeral"], sorteable:true, center:true},
        {name:"Código", selector: row => row["codigo"], sorteable:true, center:true},
        {name:"Nombre", selector: row => row["nombre"], sorteable:true, center:true},
        {name:"Stock", selector: row => row["stock"], sorteable:true, center:true},
        {name:"Precio", selector: row => row["precio"], sorteable:true, center:true},
        {name:"Acciones", selector: row => row["acciones"], sorteable:true, center:true, grow:2}
    ];

    //Poner mi DataTable en español
    const paginationOptions = {
        rowsPerPageText: "Filas por Pagina",
        rangeSeparatorText: "de",
        selecAllRowsItem: true,
        selecAllRowsItemText: "Todos"
    }

    //Estilos para la tabla
    const customStyles = {
        headRow: {
            style: {
                backgroundColor: '#f9f9f9',
                border: 'none',
            },
        },
        headCells: {
            style: {
                color: '#202124',
                fontSize: '14px',
            },
        },
        rows: {
            highlightOnHoverStyle: {
                backgroundColor: 'rgb(230, 244, 244)',
                borderBottomColor: '#FFFFFF',
                borderRadius: '25px',
                outline: '1px solid #FFFFFF',
            },
        },
        pagination: {
            style: {
                border: 'none',
            },
        },
    };

    // Retorno del contenido
    return (
        <div className="table-responsive"> 
            <h2 className="text-center ">Gestionar Productos</h2>
        
            <FormProducto {...{addOrEditProduct, idEdit, productos, setIdEdit}}/>

            <DataTable
                columns = {columnas}
                data = {productos}
                pagination
                paginationComponentOptions = {paginationOptions}
                fixedHeader
                fixedHeaderScrollHeight="300PX"
                highlightOnHover
                pointerOnHover
                customStyles={customStyles}
            />
        </div>
    );
}

export default TableProducto;
