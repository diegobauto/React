import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import { Persona } from '../components/Persona'
import { Contacto } from '../components/Contacto';
import { Home } from '../components/Home';
import { PageNotFound } from '../components/PageNotFound';
import { Navbar } from '../components/Navbar';
import { ListaUsuarios } from '../components/ListaUsuarios';
import { Usuario } from '../components/Usuario';

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
  )
}
