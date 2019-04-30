import React from 'react';
import './searchBar.css';

const SearchBar = (props) => {
      return (
            <div className="heading">
                  <div className='instagram'><i className="fab fa-instagram"></i> | Instagram</div>
                  <div className='searchBar'>
                        <span class="fas fa-search"></span>
                        <input type='text' placeholder='search'></input>
                  </div>
                  <div className='nav'>
                        <a href='#'><i class="fas fa-compass"></i></a>
                        <a href='#'><i class="fas fa-heart"></i></a>
                        <a href='#'><i class="fas fa-user"></i></a>
                  </div>
            </div>
      )
}



export default SearchBar;