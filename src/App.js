import React,{Component} from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Spinner from './components/spinner/spinner';

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
            <div >
              <Header></Header> 
			<Spinner/>
            </div>
        );
    }
}

export default App;
