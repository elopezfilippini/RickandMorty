
import React from 'react';

export default function SearchBar(props) {
  const [id, setId] = React.useState("");

  function cambio(evento) {
    setId(evento.target.value);
    console.log(id);
  }

  function precambio() {
   
   //  evento.target.value = "";
    props.onSearch(id); // Llamar a onSearch aquí después de actualizar el estado
    setId("");

  }
  function randomizado() {
    var numeroaleatorio =  Math.floor(Math.random() * (800 - 1))
    props.onSearch(numeroaleatorio) 

    //  evento.target.value = "";
     setId("");
    
   }

  return (
    <div>
      <input name= "Osiris" onChange={cambio} value={id} type='search' />
      <button onClick={precambio}>Agregar</button>
      <button onClick={randomizado}>Agregar Random</button>
    </div>
  );
}