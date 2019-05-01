import React from 'react';

class Login extends React.Component {
      constructor(){
            super();
            this.state = {

            }
      }

      render (){
            return(
                  <form className='loginForm'>
                        <input type='text' name='username' placeholder='username' />
                        <input type='password' name='password' placeholder='password' />
                        <button></button>
                  </form>
            )
      }
}


export default Login;