import React from "react";
import { Link } from "react-router-dom";
import { addFav, filterCards, orderCards, removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Nav from "./Nav";
import "./cards.css"

export default function Favorites() {
  const myfavorites = useSelector((state) => state.myFavorites);
  console.log("mis favoritos son ", myfavorites);

  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const filtercards = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div
     
        className="s"
      >
      
        <div>
          <select onChange={handleOrder} name="opciones">
            <option name="order" value="A">
              Ascendente
            </option>
            <option name="order" value="D">
              Descendente
            </option>
          </select>
          <select onChange={filtercards} name="filter">
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
  
        <hr></hr>
  
        <div
        
          className="cartas"
        >
          {myfavorites.length > 0 ? (
            myfavorites.map((character) => (
              <div className="carta"
                key={character.id}
                             >
                <h2 style={{ color: "black" }}>Favorito : {character.name} </h2>
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
              </div>
            ))
          ) : (
            <p>No hay personajes favoritos</p>
          )}
        </div>
      </div>
    </div>
  )}  