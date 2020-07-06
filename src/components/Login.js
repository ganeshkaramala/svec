import React from 'react';
import './Login.css';

class Login extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {}; 
    this.onSignupButtonPress = this.onSignupButtonPress.bind(this)

  }  

  onSignupButtonPress(){
    this.props.history.push("/register");
  }


  render() {
    return(

      <div class="ui grid">
        <div class="left floated eight wide column">
          
        </div>
        <div class="right floated eight wide column">
                          <div class="ui placeholder segment">
                          <div class="ui stackable very relaxed two column grid">
                            <div class="column">
                              <form class="ui form">
                                <div class="field">
                                  <label>Username</label>
                                  <div class="ui left icon input">
                                    <input type="text" placeholder="Username" />
                                    <i aria-hidden="true" class="user icon"></i>
                                  </div>
                                </div>
                                <div class="field">
                                  <label>Password</label>
                                  <div class="ui left icon input">
                                    <input type="password" placeholder="Password" />
                                    <i aria-hidden="true" class="lock icon"></i>
                                  </div>
                                </div>
                                <button class="ui green button">Login</button>
                              </form>
                            </div>
                            <div class="middle aligned column">
                              <button class="ui big button orange" onClick={this.onSignupButtonPress} >
                                <i aria-hidden="true" class="signup icon"></i>
                                 Sign up 
                              </button>
                            </div>
                          </div>
                          <div class="ui vertical divider">Or</div>
                        </div>     
        </div>
      </div>


     
    )
  }
}

export default Login;