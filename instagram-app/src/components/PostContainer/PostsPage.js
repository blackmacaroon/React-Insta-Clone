import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import PostContainer from "../PostContainer/PostContainer";
import dummyData from "../../dummy-data";

class PostsPage extends React.Component {
  constructor() {
    // console.log('construct')
    super();
    //state is called posts and is currently an empty array
    this.state = {
      posts: [],
      searchValue: ''
    };
  }
  //mounting data to posts array from dummyData
  componentDidMount() {
    this.setState({ posts: dummyData });
    // console.log('mount', dummyData)
  }

  searchPosts = () => {
    //filter post to only those that include searched value
    if(this.state.searchValue) {
      return this.state.posts.filter(post => {
        return post.username.includes(this.state.searchValue)
      })
    } else {
    return this.state.posts 
    }
  }

  handleChanges = event => {
    this.setState({
      searchValue: event.target.value
    });
    console.log('handle changes click')
  };
  

  render() {
    // console.log('render')
    const filteredPosts = this.searchPosts()
    return (
      <div className="App">
        {/* ///////////////////////////////////////////
      what do I need to pass to searchbar to search */}
        <SearchBar searchValue ={this.state.searchValue} handleChanges={this.handleChanges}/>
        {/* PostsPage is passing posts array to PostContainer */}
        {/* <PostContainer posts={this.state.posts} /> */}
        <div>
          {filteredPosts && filteredPosts.map(mappedPost => {
            return <PostContainer key={mappedPost.timeStamp} mappedPost={mappedPost}/>
          })}
        </div>
      </div>
    );
  }
}

export default PostsPage;
