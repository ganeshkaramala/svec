import React,{Component} from 'react';

import { 
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch 
} from 'react-router-dom'; 

import './App.css';
import Login from './components/Login';

import Register from './components/Register';


class App extends Component {

    constructor(props){
      super(props);
      this.state = { 
        name: "My name",
        login: false 
      };
      this.onButtonPress = this.onButtonPress.bind(this)

    }  

    onButtonPress(){
      //this.setState({login: true})
    }

    render(){
          return (
             <Router> 
             <div className="app"> 
                
               <div class="ui inverted top fixed menu myheader">
                  <div class="ui container">
                    <a href="/" class="header item">
                        <Link to="/">My Bank </Link>
                      </a>
                  </div>
              </div>

              
             <div className="appbody"> 
                <Switch> 
                  <Route exact path='/' component={Login}></Route> 
                  <Route exact path='/register' component={Register}></Route> 
                  <Route exact path='/contact' component={Login}></Route> 
                </Switch> 
              </div>
              
            </div> 
         </Router> 
             
		      );
    }
}

export default App;
