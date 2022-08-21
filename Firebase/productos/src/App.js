import Tabla from "./components/TableProducto";

//Importo toastify para mensajes 
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container p-4">
      <div className="row">
        <Tabla/>
      </div>
      {/* Añade toastify como un componente */}
      <ToastContainer/> 
    </div>
  );
}

export default App;