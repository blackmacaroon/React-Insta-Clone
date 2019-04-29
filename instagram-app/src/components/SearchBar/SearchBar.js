import React from 'react';
import './searchBar.css';

const SearchBar = (props) => {
      return (
            <div className="heading">
                  <i className="fab fa-instagram fa-2x"></i>
                  <div className='searchBar'>
                        <label>Search</label>
                        <input type='text' placeholder='searching for'></input>
                        <button type='submit'>Submit</button>
                  </div>
            </div>
      )
}



export default SearchBar;