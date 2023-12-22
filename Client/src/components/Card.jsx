import React from "react";
import {Link} from "react-router-dom"
import { addFav,removeFav } from "../redux/actions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// id,name,status,species,gender,origin,image,OnClose

export default function Card(props) {
   const Dispatch= useDispatch()
   const [isfav,setisfav] = useState(false) 
const myfavorites = useSelector(state => state.myFavorites)


useEffect(() => {
   // Verifica si myfavorites es un array antes de usar forEach
   if (Array.isArray(myfavorites)) {
      myfavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setisfav(true);
         }
      });
   }
}, [myfavorites, props.id]);

   function handleFavorite() {
      if (isfav === true) {setisfav(false);
      Dispatch(removeFav(props.id))}
      else {setisfav(true); 
         Dispatch(addFav(props))}}

      


      return (
        <div    style={{
         backgroundColor: "grey",
         margin: "20px",
         padding: "20px",
         borderRadius: "15px",
      }}> { isfav ? ( <button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)}{ console.log(isfav)}
         <button onClick={() => props.OnClose(props.id)} style={{backgroundColor:"yellowgreen"}}>Close</button>
         
      <Link to={`/detail/${props.id}`} >
      <br></br>
      <br></br>   
      <img src={props.image} alt='' style={{ maxWidth: '100%', height: 'auto' }} />      <h3 className="card-name" style={{fontSize:"32px", color:"yellow"}}> Status: {props.status}</h3>
      <h3 className="card-name" style={{fontSize:"24px", color:"whitesmoke"}}> ID:{props.id}</h3>
      
  
    </Link>
        </div>
        
    
   );
}

