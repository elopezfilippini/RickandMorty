import React from "react";
import { Link } from "react-router-dom";
import { addFav, filterCards, orderCards, removeFav } from "../Redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./Card";
import Nav from "./Nav";

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
        style={{
          alignItems: "center",
          flexDirection: "row",
          maxWidth: 350,
        }}
        className="Cartas"
      >
        <Link to={"/inicio"}>
          <button>Regresar</button>
        </Link>
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
          style={{
            alignItems: "center",
            flexDirection: "row",
            maxWidth: 500,
          }}
          className="Cartas"
        >
          {myfavorites.map((character) => (
            <div
              key={character.id}
              style={{
                backgroundColor: "yellow",
                fontSize: "16px",
                border: "3px solid red",
                margin: "20px",
                width: "500px",
              }}
            >
              <h2 style={{ color: "black" }}>Personaje </h2>
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
          ))}
        </div>
      </div>
    </div>
  );
}
