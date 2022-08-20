import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Nosotros } from "./components/Nosotros";
import { Contacto } from "./components/Contacto";
import { Principal } from "./components/Principal";
import { Usuarios } from "./components/Usuarios";

function App() {
  return (
    <div className="container mt-5">
      <Router>
        {/* Dentro de 'Link to' va la direccion a la que me quiero dirigir
        Y en ''Route path' se debe poner la direccion igual y a que componente se va a dirigir */}
        <div className="btn-group mt-3">
          <Link to="/" className="btn btn-outline-success">
            Inicio
          </Link>
          <Link to="/nosotros" className="btn btn-outline-info">
            Nosotros
          </Link>
          <Link to="/contacto" className="btn btn-outline-warning">
            Contacto
          </Link>
        </div>

        <hr />

        <Switch>
          {/* exact sirve para que la ruta tenga que ser exacta
          Por ejemplo para 'nosotros' como no tiene el igual siempre se va a la direccion
          del primero que encuentre, entonces sera la que tiene id , si no se le pasa un parametro
          entonces pasa al siguiente nombre 'nosotros' */}
          <Route path="/" exact>
            <Principal />
          </Route>

          <Route path="/nosotros/:id">
            <Usuarios />
          </Route>

          <Route path="/nosotros">
            <Nosotros />
          </Route>

          <Route path="/contacto">
            <Contacto />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
