import axios from "axios"
import { useParams } from "react-router-dom"
import { useState,useEffect } from "react"
import React from "react"

export default function Detail(){
const [personaje,setCharacter] = useState({})
const {id} = useParams()
console.log(id)    

useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
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
    <div>
 <h3>Nombre : {personaje.name}</h3>
 <h3>Status : {personaje.status}</h3>
 <h3>Especie : {personaje.species}</h3>
 <h3>Genero: {personaje.gender}</h3>
 <h3>Origen: {personaje.origin?.name}</h3>
 <img src={personaje.image} alt=''></img> 
 <br></br>
 ***


 



</div>)
}

{/* <h3>Especie : {personaje.species}</h3>
<h3>Genero : {personaje.gender}</h3>
<h3>Origen : {personaje.origin}</h3>
<h3>Imagen : {personaje.origin}</h3>
<img src={personaje.image} alt=''></img> */}