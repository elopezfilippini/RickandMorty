import React from "react";



export default function Card({id,name,status,species,gender,origin,image}) {
   return (
      <div>
         <h2>Id: {id}  </h2>
         <h2>Name:{name} </h2>
         <h2>Status: {status} </h2>
         <h2>Specie: {species} </h2>
         <h2>Gender:{gender} </h2>
         <h2>Origin: {origin} </h2>
         <img src={image} alt='' />
      </div>
   );
}




// export default function Card() {
//    return (
//       <div>
//          <h2>1 id</h2>
//          <h2>Rick Sanchez name</h2>
//          <h2>Alive status</h2>
//          <h2>Human especie</h2>
//          <h2>Male gender</h2>
//          <h2>Earth (C-137) origin name</h2>
//       </div>
//    );
// }