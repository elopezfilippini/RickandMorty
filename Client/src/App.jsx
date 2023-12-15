import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Index from './components/index.jsx';
import Favorites from './components/Favorites.jsx';
import Detail from './components/Detail.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx';
import React, { useState } from 'react';
import axios from 'axios';
import {Route,Routes} from "react-router-dom"
import { Provider } from 'react-redux';
import Form  from './components/Form.jsx';
import { useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
function App() {

const navigate = useNavigate();
const [access, setAccess] = useState(false);
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = '1234';

function login(userData) {
   const { email, password } = userData;
   console.log("la data en login es"+email+""+password)
   const URL = 'http://localhost:3001/rickandmorty/login/';
   axios.get(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      console.log("el access es ="+ access)
      setAccess(data);
      access && navigate('/inicio');
   }).catch((error) => window.alert('¡No hay conexión'));;
}
 
const [characters, setCharacters] = React.useState([]);
console.log(characters)

   function onSearch(id) {
   
      axios.get(`http://localhost:3001/rickandmorty/character/${id}`).then(
         ({ data }) => {
            if (data.name) {
               setCharacters((oldChars) => [...oldChars, data]);
            } else {
               window.alert('¡No hay personajes con este ID!');
            }
         }
      ).catch((error) => window.alert('¡No hay conexión'));
   }

   function OnClose(selectedid) {
      setCharacters(characters.filter((character) => character.id !== Number(selectedid)));
      console.log(selectedid);
      console.log(characters);
   }

   function logout() {
      setAccess(false);
   }

   return (
     
      <div className='App'style={{alignItems:"center",
      flexDirection:"row"}}><h1>Rick And Morty App</h1>
      {location.pathname !== "/" ? <Nav onSearch={onSearch} logout={logout} /> : null}
             <Routes>
      
         <Route path={"/about"} element={<About />}></Route>
         <Route path={"/"} element={<Form login={login}/>}></Route>
         <Route path={"/detail/:id"} element={<Detail />}></Route>
         <Route path={"/favoritos"} element={<Favorites />}></Route>
         <Route 
               path="/inicio"
      element={<Cards characters={characters} OnClose={OnClose} />}></Route>
      </Routes> 
   
      </div>
   );
}  

export default App;
//{/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}