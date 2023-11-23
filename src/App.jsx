import './App.css';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import About from './components/About.jsx';
import Index from './components/index.jsx';
import Favorites from './components/Favorites.jsx';
import Detail from './components/Detail.jsx';
import SearchBar from './components/SearchBar.jsx';
import Nav from './components/Nav.jsx';
import React from 'react';
import axios from 'axios';
import {Route,Routes} from "react-router-dom"
import { Provider } from 'react-redux';



function App() {
   return (
   
      <div className='App'style={{alignItems:"center",
      flexDirection:"row"}}><h1>Rick And Morty App</h1>

      <Routes>
         <Route path={"/about"} element={<About />}></Route>
         <Route path={"/"} element={<Index />}></Route>
         <Route path={"/detail/:id"} element={<Detail />}></Route>
         <Route path={"/favoritos"} element={<Favorites />}></Route>


    
      </Routes> 
        
      </div>
   );
}  

export default App;
//{/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}