import React from "react";
import ReactDOM from "react-dom";
import Card from './Card.jsx';
import Cards from './Cards.jsx';
import Nav from "./Nav";
import axios from "axios"

export default function Index(){var [characters,setCharacters]= React.useState([])
    function onSearch(id) {if (characters.some(character => character.id === Number(id))) {
      window.alert('Personaje repetido, ingrese uno que no figure');}
      else
       
       axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(
          ({ data }) => {
             if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
             } else {
                window.alert('¡No hay personajes con este ID!');
             }
          }
       );
    }
    function OnClose(selectedid){
       setCharacters(characters.filter((character)=>character.id !== Number(selectedid)));
       console.log(selectedid)
       console.log(characters)
    }
 return(
 <div>
<Nav onSearch={onSearch}  />  
<br></br>


    <Cards characters={characters} OnClose={OnClose}/> 
    <br></br>
</div> 
)}
 