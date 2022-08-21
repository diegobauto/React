import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { loginUsuario } from '../config/firebase.js'

export const Login = () => {
  // Cuatro
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // Seis Errores
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorPassword, setErrorPassword] = useState(null)

  // Nueve
  const history = useHistory();




  // Cinco
  const handleFormulario = async (e) => {
    e.preventDefault();

    let msgError = 'Error: ';

    // Validaciones
    if (!email.trim()) {
      console.error('Ingrese un email');
      // Seis
      setErrorEmail('Ingrese un email')
      return
    }
    if (!password.trim()) {
      console.error('Ingrese un password');
      // Seis
      setErrorPassword('Ingrese un password')
      return
    }
    // Validacion firebase
    if (password.length < 6) {
      console.error('Ingrese un password mayor a 6 caracteres');
      // Seis
      setErrorPassword('Ingrese un password mayor a 6 caracteres')
      return
    }

    // Siete
    try {
      const user = await loginUsuario(email, password)
      console.log(user);
    } catch (error) {
      // console.dir(error);
      msgError = error.message
      console.log(msgError);
    }

    if (msgError.includes('auth/user-not-found')) {
      setErrorEmail('Email no corresponde')
      return
    }
    if (msgError.includes('auth/invalid-email')) {
      setErrorEmail('Email no valido')
      return
    }
    if (msgError.includes('auth/wrong-password')) {
      setErrorPassword('Password incorrecto')
      return
    }
    // Ocho

    setEmail('')
    setPassword('')
    setErrorEmail(null)
    setErrorPassword(null)
    history.push('/admin')

  }

  return (
    // Tres
    <div>
      <h3 className="text-center">Acceso Usuarios</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <form onSubmit={handleFormulario}>
            <input
              type="text"
              placeholder="Ingresa tu email"
              className={`form-control mb-2 ` + (errorEmail ? 'is-invalid' : '')}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {errorEmail ?
              (
                <div className="invalid-feedback mb-2">
                  {errorEmail}
                </div>
              )
              : null
            }


            <input
              type="password"
              placeholder="Ingresa tu password"
              className={`form-control mb-2 ` + (errorPassword ? 'is-invalid' : '')}
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            {errorPassword &&
              (
                <div className="invalid-feedback mb-2">
                  {errorPassword}
                </div>
              )
            }
            <div className="d-grid gap-2">
              <button
                className="btn btn-outline-success">Ingresar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
