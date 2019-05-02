import React from 'react';



const withAuthenticate = PostsPage => LoginPage =>
  class extends React.Component {
    constructor (props) {
      super(props);
      this.state = {
        loggedIn: false
      }

    }
    ///////////////////////////
    //toggle login if local storage has 'user' login = true?
    //with ComponentDidMount because something was updated??
    componentDidMount () {
      if (localStorage.getItem('user')) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    }

    render() {
      if(this.state.loggedIn === true) {
        return <PostsPage />;
      } else {
        return <LoginPage />;
      }
    }
}
  export default withAuthenticate;