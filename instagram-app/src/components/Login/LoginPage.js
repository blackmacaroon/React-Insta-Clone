import React from 'react';

class LoginPage extends React.Component {
      constructor(props){
            super(props);
            this.state = {
                  username: '',
                  password: ''

            };
      }

      // any change will change state and rerender with new name:value
      handleChanges = event => {
            this.setState({
              [event.target.name]: event.target.value
            });
          };

      //on log in submit, create user with props username, save in local storage as user, reload window
      handleSubmit = event => {
            // event.preventDefault()
            const user = this.state.username;
            localStorage.setItem('user', user);
            window.location.reload();
      }


      render (){
            return(
                  <form className='loginForm'>
                        <input type='text' name='username' placeholder='username' value={this.state.username} onChange={this.handleChanges} />
                        <input type='password' name='password' placeholder='password' value={this.state.password}onChange={this.handleChanges}/>
                        <button onClick={this.handleSubmit}>Log In</button>
                  </form>
            )
      }
}


export default LoginPage;