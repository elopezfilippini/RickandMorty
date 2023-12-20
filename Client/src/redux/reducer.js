
import {addFav} from "./actions";
import { removeFav } from "./actions";
import { filterCards } from "./actions.js";
import { orderCards } from "./actions";
import { useReducer } from "react";
import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "./action-types";


const initialState ={myFavorites:[],allcharacters:[]}

export const favoritos = function (state = initialState, action) {
    switch(action.type) {
        case ADD_FAV: {
          return { ...state, myFavorites: action.payload, allCharacters:  action.payload };
        }
        case REMOVE_FAV: {
       
          return { ...state, myFavorites: action.payload, allCharacters: action.payload };
        }
        case FILTER.type:
            if (action.payload === "All") return {...state, myfavorites:state.allcharacters}

        return  {
            ...state, myFavorites:state.allcharacters.filter((personaje) => personaje.gender===action.payload)            
                };
        case ORDER.type:
            const ordercopy = [...state.myFavorites]; 

            if(action.payload==="A" ) ordercopy.sort((a,b)=> a.id-b.id)
            if(action.payload==="D" ) ordercopy.sort((a,b)=> b.id-a.id) 
            console.log(ordercopy)
            return {...state,myFavorites:ordercopy} 
       


    default:
        return state    
        
    }
}

