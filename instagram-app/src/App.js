import React from 'react';
import PostsPage from './components/PostContainer/PostsPage';
import './App.css';

class App extends React.Component {
  constructor() {
    // console.log('construct')
    super();
    //state is called posts and is currently an empty array
    this.state = {
      
      
    };
  }
 

 

  render() {
    // console.log('render')
    return (
      <div className="App">
        <PostsPage />
      </div>
    );
  }
}


export default App;








 // handleChanges = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   });
  // }

  // submitComment = event => {
  //   event.preventDefault();
  //   this.setState({
  //     commentList: [
  //       ...this.state.commentList, { username: 'kayla', text: this.state.text}
  //     ]
  //   })
  // }
