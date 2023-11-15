import React from "react";
import SearchBar from './SearchBar.jsx';

export default function Nav(props) {
    const onSearch = props.onSearch
    return (
        <SearchBar onSearch={onSearch}/>
    )
}