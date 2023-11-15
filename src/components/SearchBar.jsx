// import React from 'react';
   
//    export default function SearchBar(props) {
//       var [id,setid]= React.useState("")
//       function cambio(evento){
//          setid(evento.target.value)
//          console.log(id)}
//       function precambio(){
//          cambio(evento.target.value);
//          evento.target.value =""



//          }
//       return (
//          <div>
//             <input onChange = {cambio} type='search' />
//             <button onClick = {precambio} onClick= {()=>props.onSearch(id)}>Agregar</button> 
//          </div>
//       );
//    }

   
// Entendido. Parece que hay un pequeño malentendido en la implementación del botón. Si quieres ejecutar ambas funciones al hacer clic en el botón, deberías llamar a ambas funciones dentro del mismo manejador de eventos onClick. Aquí tienes una versión corregida:

// jsx
// Copy code
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

  return (
    <div>
      <input name= "Osiris" onChange={cambio} value={id} type='search' />
      <button onClick={precambio}>Agregar</button>
    </div>
  );
}