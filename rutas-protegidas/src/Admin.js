import React, { useEffect } from 'react'
import { useHistory } from 'react-router';
import { datosUsuario } from './config/firebase.js'

export const Admin = () => {

  const history = useHistory();
  // Diez
  useEffect(() => {
    const credencialesUsuario = datosUsuario()
    if (credencialesUsuario) {
      console.log('Existe un usuario');
    } else {
      console.log('No Existe un usuario');
      history.push('/login')
    }
  }, [history])



  return (
    <div>
      <h3>Admin Component</h3>
      {/* Diez */}
      <h4>Ruta Protegida</h4>
    </div>
  )
}
