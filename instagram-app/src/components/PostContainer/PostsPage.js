import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import PostContainer from '../PostContainer/PostContainer';
import dummyData from '../../dummy-data';


class PostsPage extends React.Component {
  constructor() {
    // console.log('construct')
    super();
    //state is called posts and is currently an empty array
    this.state = {
      posts: []
      
    };
  }
  //mounting data to posts array from dummyData
  componentDidMount () {
    // console.log('CDM')
    this.setState({ posts: dummyData })
    // console.log(dummyData)
  }

 

  render() {
    // console.log('render')
    return (
      <div className="App">
      {/* ///////////////////////////////////////////
      what do I need to pass to searchbar to search */}
        <SearchBar />
        {/* PostsPage is passing posts array to PostContainer */}
        <PostContainer 
        posts={this.state.posts} 
        />
      </div>
    );
  }
}


export default PostsPage;