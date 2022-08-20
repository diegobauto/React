import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Persona } from "./Persona";
import { Contacto } from "./Contacto";
import { Home } from "./Home";
import { PageNotFound } from "./PageNotFound";
import { Navbar } from "./Navbar";
import { ListaUsuarios } from "./ListaUsuarios";
import { Usuario } from "./Usuario";

export const AppRouter = () => {
  return (
    <>
      <h1>App Router</h1>

      <Router>
        <Navbar />
        <Switch>
          <Route path="/lista-usuarios/:id" component={Usuario} />
          <Route path="/lista-usuarios" component={ListaUsuarios} />
          <Route path="/persona" component={Persona} />
          <Route path="/contacto" component={Contacto} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </Router>
    </>
  );
};
