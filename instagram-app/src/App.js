import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
// import CommentSection from './components/PostContainer/components/Comments';
import dummyData from './dummy-data';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
      
    };
  }


  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}


export default App;
