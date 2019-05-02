import React from 'react';
import './searchBar.css';

const SearchBar = (props) => {
      return (
            <div className="heading">
                  <div className='instagram'><i className="fab fa-instagram"></i> | Instagram</div>
                  <div className='searchBar'>
                        <span className="fas fa-search"></span>
                        {/* Why not onSubmit? */}
                        <input value={props.searchValue} type='text' placeholder='search' onChange={props.handleChanges}></input>
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