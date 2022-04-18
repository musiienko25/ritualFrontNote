import React from 'react';
import './styles.css'

const Search = ({handleSearchNote}) => {
    return (
        <div className="search">
            <input type="text" placeholder="Search..."onChange={(event) => handleSearchNote(event.target.value)}/>
        </div>
    )
}

export default Search;