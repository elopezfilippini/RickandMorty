import React from "react";
import ReactDOM from "react-dom";
import Card from './Card.jsx';
import Cards from './Cards.jsx';
import Nav from "./Nav";
import axios from "axios"

export default function Index(){var [characters,setCharacters]= React.useState([])
    function onSearch(id) {
       console.log(`https://rickandmortyapi.com/api/character/${id}`)
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
    <Cards characters={characters} OnClose={OnClose}/> 
</div> 
)}