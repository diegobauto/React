import React, { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { IoMdAdd } from "react-icons/io";
import { toast } from "react-toastify"; //Utilizar notificaciones
import { db } from "./firebase.js"; //Importamos la base de datos de firestore

function FormProducto(props) {
  //valores iniciales como vacios para un producto
  const initialValues = {
    codigo: "",
    nombre: "",
    stock: "",
    precio: "",
  };

  // Estado para los valores del producto
  const [values, setValues] = useState(initialValues);

  const handleInputChange = (e) => {
    //Capturo el 'name' y el 'value' del formulario
    const { name, value } = e.target;

    //Actualizo el valor de mi objeto dependiendo de cual casilla este digitando
    setValues({
      ...values,
      [name]: value,
    });
  };

  //Crea un toast de tipo warning
  const createToast = (nombre) => {
    return toast.warning(nombre);
  };

  //Valida los campos del formulario, si no hay un valor muestra una notificación con Toast
  const validationForm = () => {
    if (values.codigo === "") {
      createToast("Código sin llenar");
      return; //Para salir y que no retorne el true que indica que ya se valido todo, asi con los demas return
    }
    if (values.nombre === "") {
      createToast("Nombre sin llenar");
      return;
    }
    if (values.stock === "") {
      createToast("Stock sin llenar");
      return;
    }
    if (values.precio === "") {
      createToast("Precio sin llenar");
      return;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validationForm()) {
      props.addOrEditProduct(values); //Envio los datos a la Tabla
      handleClose(); //Cuando envio los datos, cierro el popup
      setValues({ ...initialValues }); //Modifico el valor con el producto digitado
    }
  };

  //Funcion para obtener el producto a editar
  const getProductEdit = async (id) => {
    const doc = await db.collection("productos").doc(id).get(); //Se obtiene el producto al cual vamos a editar
    //Asigna al producto los valores que obtiene para mostrar los valores en el popup(form)
    setValues({ ...doc.data() });
  };

  useEffect(() => {
    //Traer el id actual(id a editar), y si no lo traemos, o sea si esta vacio
    //Hace el flujo normal para guardar un nuevo registro
    if (props.idEdit === "") {
      setValues({ ...initialValues });
    } else {
      //Sino obtenemos el id y lo pasamos a getProductEdit
      getProductEdit(props.idEdit);
      handleShow(); //Cuando envio el dato de actualizar, abro el popup
    }
  }, [props.idEdit]);

  //Cerrar el popup del formulario
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    props.setIdEdit(""); //ponemos el idEdit en vacio para indicar que ya no estamos editando
  };
  const handleShow = () => setShow(true); //Abrir el popup del formulario

  return (
    <>
      {/* Se crea el formulario con componentes de Boopstrap */}
      <Button variant="primary" className="mb-3" onClick={handleShow}>
        Añadir Producto <IoMdAdd />
      </Button>

      <Modal show={show} onHide={handleClose} size="sm" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {props.idEdit === "" ? "Añadir Producto" : "Editando Producto"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="codigo">
              <Form.Control
                type="text"
                placeholder="Ingrese el código"
                name="codigo"
                value={values.codigo}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="nombre">
              <Form.Control
                type="text"
                placeholder="Ingrese el nombre"
                name="nombre"
                value={values.nombre}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="stock">
              <Form.Control
                type="number"
                placeholder="Ingrese el stock"
                name="stock"
                value={values.stock}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="precio">
              <Form.Control
                type="number"
                placeholder="Ingrese el precio"
                name="precio"
                value={values.precio}
                onChange={handleInputChange}
              />
            </Form.Group>

            <div className="d-grid gap-2">
              <Button variant="primary" onClick={handleSubmit}>
                {props.idEdit === "" ? "Agregar" : "Actualizar"}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormProducto;
