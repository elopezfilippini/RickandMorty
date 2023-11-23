import React from "react";
import {Link} from "react-router-dom"
import { addFav,removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";


export default function Favorites(){
    const myfavorites = useSelector(state => state.myFavorites)
    console.log("mis favoritos son ", myfavorites)
    return(
        <div style={{  alignItems:"center",
        flexDirection:"row",maxWidth:50}} className='Cartas'>
          {myfavorites.map((character) =>(
            <div key={character.id} style={{
               backgroundColor: 'yellow', 
               fontSize: '16  px',
               border: '3px solid red',
               margin: '2p  x',
               width : '500px',
           
             }}> <h2 style={{color:"Black"}}>Personaje </h2>
               <Card
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  status={character.status}
                  species={character.species}
                  gender={character.gender}
                  origin={character.origin.name}
                  image={character.image}
                
                  />
         </div>))}
         </div>)}



