
import {addFav} from "./actions";
import { removeFav } from "./actions";
import { useReducer } from "react";

const initialState ={myFavorites:[]}

export const favoritos = function (state = initialState, action) {
    switch (action.type)
    {
        case addFav().type: 
        return {    
            ...state, myFavorites:[...state.myFavorites,action.payload]            
        };
        
        case removeFav().type:
        return  {
            ...state, myFavorites:state.myFavorites.filter((personajeid) => personajeid.id!==Number(action.payload))            
        };
        default:
            return state
    }
}

