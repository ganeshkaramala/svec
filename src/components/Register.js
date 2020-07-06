import React from 'react';
import './Register.css';
import {Link}  from 'react-router-dom';

class Register extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      customerId: null,
      firstname: null,
      lastname: null,
      isSubmitted: false
    }; 
    this.onSubmitButtonPress = this.onSubmitButtonPress.bind(this)

  } 

  onCustomerIdChange = (event)=>{
    this.setState({customerId: event.target.value});
  }
  onFirstnameChange = (event)=>{
    this.setState({firstname: event.target.value});
  }
  onLastnameChange = (event)=>{
    this.setState({lastname: event.target.value});
  }

  onSubmitButtonPress(){
    this.setState({isSubmitted: true})
  }

  
  onResetButtonPress(){
    this.setState({
      customerId: null,
      firstname: null,
      lastname: null
    })
    
  }

  render(){

    if ( this.state.isSubmitted ){
      return (
        <div>
            <p class="green">Your Customer Id: {this.state.customerId} Registered Successfully</p>
            <Link to="/">Login</Link>
        </div>
      )
    }

    return( 
      
      <div class="ui centered one column grid">
              
              <form class="ui form">
              
                <div class="field">
                  <label>Customer Id</label>
                  <div class="ui input"><input type="number" placeholder="Customer Id" onChange={this.onCustomerIdChange}/></div>
                </div>
                <div class="field">
                  <label>Fist name</label>
                  <div class="ui input"><input type="text" placeholder="First name" onChange={this.onFirstnameChange} /></div>
                </div>
                <div class="field">
                  <label>Last name</label>
                  <div class="ui input"><input type="text" placeholder="Last name" onChange={this.onLastnameChange} /></div>
                </div>
              
              <div class="field"><button class="ui button green" onClick={this.onSubmitButtonPress}>Submit</button></div>
            </form>
          </div>
      
    )
  }
}

export default Register;