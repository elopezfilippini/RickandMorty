const axios = require("axios");
const express = require('express');

const getCharById = function (req,res) {
const id= req.params.id
   
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(
           ({ data }) => {
             const personaje = {id: data.id, name: data.name, gender:data.gender, species:data.species, origin:data.origin, image:data.image, status:data.status}
             
             res.status(200).json(personaje)
            }
        )
        .catch(error => {
            console.error(error); // Agrega un registro de error en la consola
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          });
      };

      module.exports = getCharById;