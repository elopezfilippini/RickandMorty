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


function App() {
   return (
     
      <div style={{
         backgroundColor: "grey",
        
         
         }}><h1>Rick And Morty App</h1>
         <br></br>
         <br></br>
         <br></br>
         <br></br>
      <Routes>
         <Route path={"/about"} element={<About />}></Route>
         <Route path={"/"} element={<Form />}></Route>
         <Route path={"/detail/:id"} element={<Detail />}></Route>
         <Route path={"/favoritos"} element={<Favorites />}></Route>
         <Route path={"/inicio"} element={<Index />}></Route>
      </Routes> 
   
      </div>
   );
}  

export default App;
//{/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}