import React from "react";
import './search-box.styles.css'

//functional component doesn't have access to state or lifecycle methods
export const SearchBox = ({placeholder, handleChange}) => {
    return(
        <input 
            className='search'
            type='search' 
            placeholder= {placeholder}
            onChange={handleChange}
        />
    )
}