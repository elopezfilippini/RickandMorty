import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx';
import React from 'react';
import axios from 'axios';

function App() {
   var [characters,setCharacters]= React.useState([])
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
   
   return (
      <div className='App'>
         <Nav onSearch={onSearch}  />  
        <Cards characters={characters} />
      </div>
   );
}

export default App;
//{/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}