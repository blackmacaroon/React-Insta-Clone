import React from 'react';
import './searchBar.css';

const SearchBar = (props) => {
      return (
            <div className="searchBar">
                  <label>Search</label>
                  <input type='text' placeholder='searching for'></input>
                  <button type='submit'>Submit</button>
            </div>
      )
}



export default SearchBar;