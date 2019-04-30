import React from 'react';
import './searchBar.css';

const SearchBar = (props) => {
      return (
            <div className="heading">
                  <div className='instagram'><i className="fab fa-instagram"></i> | Instagram</div>
                  <div className='searchBar'>
                        <span className="fas fa-search"></span>
                        <input type='text' placeholder='search'></input>
                  </div>
                  <div className='nav'>
                        <i className="fas fa-compass"></i>
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-user"></i>
                  </div>
            </div>
      )
}



export default SearchBar;