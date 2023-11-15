import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx';
import React from 'react';
function App() {
   var [characters,setcharacters]= React.useState([])
   function onSearch(){
      setcharacters([...characters,  {id: 1,
         name: 'Rick Sanchez',
         status: 'Alive',
         species: 'Human',
         gender: 'Male',
         origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
         },
         image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
   }])}
   
   return (
      <div className='App'>
         <Nav onSearch={onSearch}  />  
        <Cards characters={characters} />
      </div>
   );
}

export default App;
//{/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}