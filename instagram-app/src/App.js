import React from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import LoginPage from "./components/Login/LoginPage";
import withAuthenticate from "./components/authentication/withAuthenticate";
import "./App.css";

class App extends React.Component {
  constructor() {
    // console.log('construct')
    super();
    this.state = {
      //what goes here? I don't understand why this is empty and my page still renders
    };
  }

  render() {
    // console.log('render')
    return (
      <div className="App">
        {/* <PostsPage /> */}
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(LoginPage);

export default App;
