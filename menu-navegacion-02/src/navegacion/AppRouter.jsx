import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Persona } from "../components/Persona";
import { Contacto } from "../components/Contacto";
import { Home } from "../components/Home";
import { PageNotFound } from "../components/PageNotFound";
import { Navbar } from "./Navbar";
import { ListaUsuarios } from "../components/ListaUsuarios";
import { Usuario } from "../components/Usuario";

export const AppRouter = () => {
  return (
    <>
      <h1>App Router</h1>
      {/* Router con su NavBar */}
      <Router>
        <Navbar />
        {/* Switch que funciona como indicador a cual url queremos acceder */}
        <Switch>
          {/* El Route tiene su pat (url) y el componente (component) al 
          que se accede cuando se va a esa url */}
          <Route path="/lista-usuarios/:id" component={Usuario} />
          <Route path="/lista-usuarios" component={ListaUsuarios} />
          <Route path="/persona" component={Persona} />
          <Route path="/contacto" component={Contacto} />
          <Route exact path="/" component={Home} />
          {/* El astaerisco permite que cuando no se accede a una direccrion aterior
          Accede al componente 'PageNotFound'*/}
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
};
