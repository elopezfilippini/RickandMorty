import {applyMiddleware, createStore,compose } from "redux";
import { favoritos } from "./reducer";

import  thunkMiddleware  from "redux-thunk";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOS__||compose;
const store = createStore(favoritos, composeEnhancer(applyMiddleware(thunkMiddleware)));

 export default store;
 