import Pagination from "@mui/material/Pagination";

//Modulo de material ui, toco importarlo
function PaginationControlled({ pagina, setPagina }) {
  const handleChange = (event, value) => {
    setPagina(value);
  };

  return (
    <div className="paginacion">
      <Pagination
        count={42} // Cantidad de paginas
        page={pagina} //El componente sepa la pagina en la que esta
        onChange={handleChange} //Funcion al cambiar de pagina
        color="primary" //Color de la apgina seleccionada
      />
    </div>
  );
}

export default PaginationControlled;
