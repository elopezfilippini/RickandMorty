import React from "react";
import {Link} from "react-router-dom"
import { addFav,removeFav } from "../Redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// id,name,status,species,gender,origin,image,OnClose

export default function Card(props) {
   const Dispatch= useDispatch()
   const [isfav,setisfav] = useState(false) 
const myfavorites = useSelector(state => state.myFavorites)
console.log("mi favorito es:", myfavorites)
useEffect(() => {
   myfavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setisfav(true);
      }
   });
}, [myfavorites]);
   function handleFavorite() {
      if (isfav === true) {setisfav(false);
      Dispatch(removeFav(props.id))}
      else {setisfav(true); Dispatch(addFav(props))}}


      return (
        <div> { isfav ? ( <button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}{ console.log(isfav)}
         <button onClick={() => OnClose(props.id)} style={{backgroundColor:"yellowgreen"}}>Close</button>
         <button onClick={() => console.log("los favoritos son:",myfavorites)} style={{backgroundColor:"yellowgreen"}}>fav</button>
      <Link to={`/detail/${props.id}`} >
      <br></br>
      <br></br>   
      <img src={props.image} alt=''></img>
      <h3 className="card-name">{props.name}</h3>
      
  
    </Link>
        </div>
        
    
   );
}

{/* <h2>Id: {id}  </h2>
<h2>Name: {name} </h2>
<h2>Status: {status} </h2>
<h2>Specie: {species} </h2>
<h2>Gender:{gender} </h2>
<h2>Origin: {origin} </h2>
<img src={image} alt=''
 /> */}


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