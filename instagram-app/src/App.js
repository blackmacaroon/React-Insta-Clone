import React from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import PostContainer from './components/PostContainer/PostContainer';
// import CommentSection from './components/PostContainer/components/CommentSection';
import dummyData from './dummy-data';
import './App.css';

class App extends React.Component {
  constructor() {
    // console.log('construct')
    super();
    this.state = {
      posts: []
      
    };
  }

  componentDidMount () {
    // console.log('CDM')
    this.setState({ posts: dummyData })
    // console.log(dummyData)
  }

  // addComment = comment => {
  //   this.setState({
  //     comments: comment.target.value
  //   });
  // }

  render() {
    // console.log('render')
    return (
      <div className="App">
        <SearchBar />
        <PostContainer posts={this.state.posts}/>
        {/* <CommentSection addComment={this.addComment}/> */}
      </div>
    );
  }
}


export default App;
