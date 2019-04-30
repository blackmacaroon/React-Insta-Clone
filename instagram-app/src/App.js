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

  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  submitComment = event => {
    event.preventDefault();
    this.setState({
      commentList: [
        ...this.state.commentList, { username: 'kayla', text: this.state.text}
      ]
    })
  }

  render() {
    // console.log('render')
    return (
      <div className="App">
        <SearchBar />
        <PostContainer 
        posts={this.state.posts} 
        handleChanges={this.handleChanges} 
        submitComment={this.submitComment}/>
        {/* <CommentSection addComment={this.addComment}/> */}
      </div>
    );
  }
}


export default App;
