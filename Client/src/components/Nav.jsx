
import './Nav.css';
import React from "react";
import SearchBar from './SearchBar.jsx';
import {Link} from  "react-router-dom"

export default function Nav(props) {
    const onSearch = props.onSearch
    return (
        <div>
        <Link to={'/inicio'}><button className="buttonContainer button">Home</button></Link>
        <Link to={'/about'}><button className="buttonContainer button" >About</button></Link>
        <Link to={'/favoritos'}><button className="buttonContainer button" >Favoritos</button></Link>
        <button onClick={props.logout} >Logout ❌</button>
         <hr />
       

        <SearchBar onSearch={onSearch}/></div>
    )
}