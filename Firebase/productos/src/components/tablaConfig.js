// Distribución de mis columnas
export const columnas = [
  {
    name: "ID",
    selector: (row) => row["numeral"],
    sorteable: true,
    center: true,
  },
  {
    name: "Código",
    selector: (row) => row["codigo"],
    sorteable: true,
    center: true,
  },
  {
    name: "Nombre",
    selector: (row) => row["nombre"],
    sorteable: true,
    center: true,
  },
  {
    name: "Stock",
    selector: (row) => row["stock"],
    sorteable: true,
    center: true,
  },
  {
    name: "Precio",
    selector: (row) => row["precio"],
    sorteable: true,
    center: true,
  },
  {
    name: "Acciones",
    selector: (row) => row["acciones"],
    sorteable: true,
    center: true,
    grow: 2,
  },
];

//Poner mi DataTable en español
export const paginationOptions = {
  rowsPerPageText: "Filas por Pagina",
  rangeSeparatorText: "de",
  selecAllRowsItem: true,
  selecAllRowsItemText: "Todos",
};

//Estilos para la tabla
export const customStyles = {
  headRow: {
    style: {
      backgroundColor: "#f9f9f9",
      border: "none",
    },
  },
  headCells: {
    style: {
      color: "#202124",
      fontSize: "14px",
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: "rgb(230, 244, 244)",
      borderBottomColor: "#FFFFFF",
      borderRadius: "25px",
      outline: "1px solid #FFFFFF",
    },
  },
  pagination: {
    style: {
      border: "none",
    },
  },
};
