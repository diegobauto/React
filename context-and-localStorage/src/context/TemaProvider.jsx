import React, { useEffect, useState } from "react";

//Creacion del contexto
export const TemaContexto = React.createContext();

//Componente del contexto
export const TemaProvider = (props) => {
  const temaInicial = {
    background: "#000",
    color: "#eee",
  };

  //Estado para guardar el tema, con un estado inical (colores predefinidos)
  const [tema, setTema] = useState(temaInicial);

  const cambiarColor = (valor) => {
    setTema(valor);
    //Utiliza el localStorage para dar un estilo
    //localStorage es una variable que se guarda en el almacenamiento de la web
    //Para verlo vamos a inspeccionar pagina, luego en Aplicación, y en almacenamiento local
    localStorage.setItem("tema", JSON.stringify(valor));
  };

  //Cuando se actualiza el tema obtiene lo que hay en el localStorage
  //Y asigna el valor a la variale del tema
  useEffect(() => {
    const dataStorage = localStorage.getItem("tema");
    if (dataStorage) {
      setTema(JSON.parse(dataStorage));
    }
  }, [setTema]); //Indica que cuando se altera (setTema) se realiza lo que esta dentro del useEffect

  return (
    //Se le pone el value, para que cuando se utilice este contexto en otro componente
    // pueda utilizar tanto 'tema' como 'cambiarColor'
    <TemaContexto.Provider
      value={{
        tema,
        cambiarColor,
      }}
    >
      {/* {props.children} permite indicar que los componentes que van dentro puede utilizar el contexto */}
      {props.children} 
    </TemaContexto.Provider>
  );
};
