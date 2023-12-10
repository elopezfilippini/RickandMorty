import React from "react";
import SearchBar from './SearchBar.jsx';
import {Link} from  "react-router-dom"

export default function Nav(props) {
    const onSearch = props.onSearch
    return (
        <div>
        <Link to={'/inicio'}><button style={{ border: "1px solid #ccc"}}>Home</button></Link>
        <Link to={'/about'}><button style={{ border: "1px solid #ccc"}} >About</button></Link>
        <Link to={'/favoritos'}><button style={{ border: "1px solid #ccc"}} >Favoritos</button></Link>

        <SearchBar onSearch={onSearch}/></div>
    )
}