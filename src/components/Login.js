import React from 'react';
import './Login.css';
import 'semantic-ui-react';
class Login extends React.Component{

  render() {
    return(
      <div>
        <div className='login'>
          <form className='form' action=''>
            <div className='header'>Login</div><br></br>
            <div className='form'>
              <div className='field'>
                <input className='email' type="text" placeholder="Username" /><br></br><br></br>
                <div>
                  <input className='password' type="password" placeholder="password" />
                  <br></br><br></br>
                </div>
              </div>
              <div>
                <button className='login-button' type="submit">Login</button><br></br>
                 <div className='or'>------------  or  -------------</div><br></br>
                <button className='newbutton' type="submit">Create new account</button><br></br>
                <div className='forgotpassword'> forgotten password?</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;