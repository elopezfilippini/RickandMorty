
import {addFav} from "./actions";
import { removeFav } from "./actions";
import { filterCards } from "./actions";
import { orderCards } from "./actions";
import { useReducer } from "react";

const initialState ={myFavorites:[],allcharacters:[]}

export const favoritos = function (state = initialState, action) {
    switch (action.type)
    {
        case addFav().type: 
        return {    
            ...state, myFavorites:[...state.myFavorites,action.payload],allcharacters:[...state.allcharacters,action.payload]              
        };
        
        case removeFav().type:
        return  {
            ...state, myFavorites:state.myFavorites.filter((personajeid) => personajeid.id!==Number(action.payload)), 
            allcharacters:state.allcharacters.filter((personajeid) => personajeid.id!==Number(action.payload))            
        };
        
        case filterCards().type:
            if (action.payload === "All") return {...state, myfavorites:state.allcharacters}

        return  {
            ...state, myFavorites:state.allcharacters.filter((personaje) => personaje.gender===action.payload)            
                };
        case orderCards().type:
            const ordercopy = [...state.myFavorites]; 

            if(action.payload==="A" ) ordercopy.sort((a,b)=> a.id-b.id)
            if(action.payload==="D" ) ordercopy.sort((a,b)=> b.id-a.id) 
            console.log(ordercopy)
            return {...state,myFavorites:ordercopy} 
       


    default:
        return state    
        
    }
}

