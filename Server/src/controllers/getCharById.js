import axios from "axios"

const getCharById = function (res,id) {

   
        axios.get(`https://rickandmortyapi.com/api/character/${id}`).then(
           ({ data }) => {
             const personaje = {name: data.name, gender:data.gender, species:data.species, origin:data.origin, image:data.image, status:data.status}
             res.writeHead(200, { 'Content-Type': 'application/json' });
             res.end(JSON.stringify(personaje));
            }
        )
        .catch(error => {
            console.error(error); // Agrega un registro de error en la consola
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
          });
      };

      export default getCharById;