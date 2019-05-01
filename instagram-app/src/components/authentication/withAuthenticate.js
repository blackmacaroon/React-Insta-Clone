import React from './node_modules/react';


const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        loggedIn: false
      }

    }


    render() {
      if(this.state.loggedIn) {
        return <PostsPage />;
      } else {
        return <LoginPage />;
      }
    }
}
  export default withAuthenticate;