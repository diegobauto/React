function Personaje({ personaje }) {
  //Componente Personaje con su nombre e imagen unicamente
  return (
    <div className="personaje">
      {console.log(personaje)}
      <h3>{personaje.name}</h3>
      <img src={personaje.image} alt={personaje.image} />
    </div>
  );
}

export default Personaje;
