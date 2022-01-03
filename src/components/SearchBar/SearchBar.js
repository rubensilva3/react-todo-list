import React from "react";
import "./SearchBar.css"

const SearchBar = ({text, setText}) => {
    return (
        <input 
            placeholder="Enter task..." 
            className="SearchBar-input" type="Text" 
            value={text} 
            onChange={(e) => setText(e.target.value)} />
        );
}

export default SearchBar;