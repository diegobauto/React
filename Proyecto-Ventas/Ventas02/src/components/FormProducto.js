import React, {useState, useEffect} from 'react';
import {Button, Modal, Form} from 'react-bootstrap';
import {IoMdAdd} from 'react-icons/io';


import {toast} from "react-toastify";
import {consultarDocumentoDatabase} from "../firebase";

function FormProducto(props) {

    const initialValues = {
        codigo: "",
        nombre: "",
        stock: "",
        precio: ""
    }

    const [values, setValues] = useState(initialValues);

    const handleInputChange = (e) => {
        //Capturo el name y el value del formulario 
        const {name, value} = e.target;

        //Actualizo el valor de mi objeto dependiendo de cual casilla este digitando
        setValues({
            ...values,
            [name]: value
        })
    }

    const createToast = (nombre) => {
        return toast.warning(nombre)
    }

    const validationForm = () => {
        if (values.codigo === "") {
            createToast("Código sin llenar")
            return
        }
        if (values.nombre === "") {
            createToast("Nombre sin llenar")
            return
        }
        if (values.stock === "") {
            createToast("Stock sin llenar")
            return
        }
        if (values.precio === "") {
            createToast("Precio sin llenar")
            return
        }
        return true
    }

    const handleSubmit = () => {
        if (validationForm()) {
            props.addOrEditProduct(values); //Envio los datos a la Tabla
            handleClose(); //Cuando envio los datos, cierro el popup
            setValues({...initialValues})
        }
    }

    //Se obtiene el producto al cual vamos a editar
    const getProductEdit = async (id) => {
        const doc = await consultarDocumentoDatabase("productos", id);
        setValues({...doc.data()}) //Mostrar los valores en el popup(form)
    }

    useEffect(() => {
        //Traer el id actual(id a editar), y si no lo traemos, o sea si esta vacio
        //Hace el flujo normal para guardar un nuevo registro
        if (props.idEdit === "") {
            setValues({...initialValues});
        } else { //Sino obtenemos el id y lo pasamos a getProductEdit
            getProductEdit(props.idEdit)
            handleShow(); //Cuando envio el dato de actualizar, abro el popup
        }
    }, [props.idEdit])

    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false);
        props.setIdEdit(""); //ponemos el idEdit en vacio para indicar que ya no estamos editando
    };
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" className="float-end mb-3" onClick={handleShow}>
                Añadir Producto <IoMdAdd/>
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                size="sm"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        {props.idActual === "" ? "Añadir Producto" : "Editando Producto"}

                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="codigo">
                            <Form.Control type="text" placeholder="Ingrese el código" name="codigo"
                                          value={values.codigo} onChange={handleInputChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="nombre">
                            <Form.Control type="text" placeholder="Ingrese el nombre" name="nombre"
                                          value={values.nombre} onChange={handleInputChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="stock">
                            <Form.Control type="number" placeholder="Ingrese el stock" name="stock" value={values.stock}
                                          onChange={handleInputChange}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="precio">
                            <Form.Control type="number" placeholder="Ingrese el precio" name="precio"
                                          value={values.precio} onChange={handleInputChange}/>
                        </Form.Group>

                        <div className="d-grid gap-2">
                            <Button variant="primary" onClick={handleSubmit}>
                                {props.idActual === "" ? "Agregar" : "Actualizar"}
                            </Button>
                        </div>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default FormProducto;