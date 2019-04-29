import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data';

import './App.css';

function App() {
  return (
    <div className="App">
      <SearchBar />
      <PostContainer />
    </div>
  );
}

export default App;
