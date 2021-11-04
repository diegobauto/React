import { createContext } from 'react'

export const HolaContexto = createContext()

export const HolaProvider = (props) => {

  const hola = 'Hola des de un a variable global'

  return (
    <HolaContexto.Provider value={{ hola }}>
      {props.children}
    </HolaContexto.Provider>
  )
}
