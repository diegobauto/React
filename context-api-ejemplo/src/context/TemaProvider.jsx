import React, { useEffect, useState } from 'react'

export const TemaContexto = React.createContext()

export const TemaProvider = (props) => {

  const temaInicial = {
    background: '#000',
    color: '#eee',
  }

  const [tema, setTema] = useState(temaInicial)

  const cambiarColor = (valor) => {
    setTema(valor)
    localStorage.setItem('tema', JSON.stringify(valor))
  }

  useEffect(() => {
    const dataStorage = localStorage.getItem('tema')
    if (dataStorage) {
      setTema(JSON.parse(dataStorage))
    }
  }, [setTema])


  return (
    <TemaContexto.Provider value={
      {
        tema,
        cambiarColor
      }
    }>
      {props.children}
    </TemaContexto.Provider>
  )
}
