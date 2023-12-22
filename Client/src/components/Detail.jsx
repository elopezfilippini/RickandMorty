import axios from "axios"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import React from "react"

export default function Detail(){
const [personaje,setCharacter] = useState({})
const {id} = useParams()
console.log(id)    

useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
       ({ data }) => {
          if (data.name) {
             setCharacter(data);    
          } else {
             window.alert('No hay personajes con ese ID');
          } 
       }
    );
    return setCharacter({});
 }, [id]);
 console.log(personaje)
 return (
    <div className="Tarjeta" style={{background: 'rgba(235, 235, 0, 0.8)    ', borderRadius:"30%", fontSize: "30px"}}> 
<br></br>

<h3 style={{fontFamily: 'Verdana', color:"magenta", marginBottom:"0.001px"}}>Número de personaje: {personaje.id}</h3>
 <h3 style={{fontFamily: 'Verdana', color:"magenta",marginBottom:"0.01px"}}>Nombre : {personaje.name}</h3>
 <h3 style={{fontFamily: 'Verdana',color:"magenta"}}>Status : {personaje.status}</h3>
 <h3 style={{fontFamily: 'Verdana',color:"magenta"}}>Especie : {personaje.species}</h3>
 <h3 style={{fontFamily: 'Verdana',color:"magenta"}}>Género: {personaje.gender}</h3>
 <h3 style={{fontFamily: 'Verdana',color:"magenta"}}>Origen: {personaje.origin?.name}</h3>
 <img style={{width:"500px",height:"450px",  borderRadius:"30000%",  boxShadow: "1px 2px 100px rgba(148, 900, 100, 140.5)" 
}}src={personaje.image} alt=''></img> 
 <br></br>
 


 



</div>)
}

{/* <h3>Especie : {personaje.species}</h3>
<h3>Genero : {personaje.gender}</h3>
<h3>Origen : {personaje.origin}</h3>
<h3>Imagen : {personaje.origin}</h3>
<img src={personaje.image} alt=''></img> */}