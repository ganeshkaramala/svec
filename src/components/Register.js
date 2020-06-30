import React from 'react';
import './Register.css';
import {Form, Input} from 'semantic-ui-react';


class Register extends React.Component{
  render(){
    return(
      <div className="mainpage">
        <div className="mainsection"> 
          <div className="subsection">
            <div className="fedchoice">
              <b>FedChoice</b> <span className="bank"><b>Bank</b></span>
            </div>
            <div className="container">
            <div className="ui compact menu">
                  <div className="h3"><div className="ui simple dropdown item">
                    Home
                    <i className="home icon"></i>
                  </div>
                </div>
                </div>         
                <div className="ui compact menu">
                  <div className="h3"><div className="ui simple dropdown item">
                    CustomerManagement
                    <i className="dropdown icon "></i>
                    <div className="menu"> 
                      <div className="item">Create Customer</div>
                      <div className="item">Customer Search</div>
                      <div className="item">Update Customer</div>
                    </div>
                    </div>
                  </div>
              </div>
                <div className="ui compact menu">
                  <div className="h3"><div className="ui simple dropdown item">
                    AccountManagement
                    <i className="dropdown icon "></i>
                    <div className="menu"> 
                      <div className="item">Create Account</div>
                      <div className="item">Delete Account</div>
                      <div className="item">Account Search</div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="ui compact menu">
                  <div className="h3"><div className="ui simple dropdown item">
                    StatusDetails
                    <i className="dropdown icon "></i>
                    <div className="ui compact menu">
                        <div className="item">Account Status</div>
                        <div className="ui simple dropdown item">Transaction Details
                        <i className="dropdown icon"></i>
                          <div className="menu">
                            <div className="item">Number of transactions</div>
                            <div className="item">Start & End</div>
                          </div>
                      </div>
                      <div className="item">Customer Status</div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="ui compact menu">
                  <div className="h3"><div className="ui simple dropdown item">
                    AccountOperations
                    <i className="dropdown icon "></i>
                    <div className="menu"> 
                      <div className="item">Deposit Money</div>
                      <div className="item">Withdraw Money</div>
                      <div className="item">Transfer Money</div>
                    </div>
                  </div>
                  </div>
                </div>
                <div className="ui compact menu">
                <div className="h3"><div className="ui simple dropdown item">
                    Login
                  </div>
                </div>
                </div>

            </div>
          </div>
        </div>
        <div className="customerscreen">
          <Form>
              <h1 className="h1">Create Customer </h1><br></br>
              <a className="a">Customer SSN Id <span className="asterisk">*</span><Input type="string" placeholder=" "/></a><br></br>
              <a className="a">Customer Name <span className="asterisk">*</span><Input type="text" placeholder=" "></Input></a><br></br><br></br>
              <a className="a">Age <span className="asterisk">*</span><Input type="number" placeholder=" "></Input></a><br></br><br></br>
              <a className="a">Address <span className="asterisk">*</span><Input type="text" placeholder=" "></Input></a><br></br><br></br>
              <a className="a">State <span className="asterisk">*</span><Input type="text" placeholder="Select"  icon='caret down icon'></Input></a><br></br><br></br>
              <a className="a">City <span className="asterisk">*</span><Input type="text" placeholder="Select"  icon='caret down icon'/></a><br></br><br></br>
              <a className="asterisk"><b>(*)Fields are compulsory</b></a><br></br><br></br>
              <button type="submit" className="submitbutton"><b>Submit</b></button>
              <button className="resetbutton"><b>Reset</b></button>
          </Form>
        </div>
        <div className="footer">
          <a className="footertext1"><span className="footerspan">About us</span></a>
          <a className="footertext2"><span className="footerspan"> Services</span></a>
          <a className="footertext3">Contact Us</a>
        </div>
      </div>
    )
  }
}

export default Register;