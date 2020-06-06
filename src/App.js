import React,{Component} from 'react';
import './App.css';

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
                  <h1>Hello World</h1>
                  <div>
                    <button class="ui primary button">Primary</button>
                    <button class="ui secondary button">Secondary</button>
                  </div>
				  
				  <div class="ui ordered steps">
  <div class="completed step">
    <div class="content">
      <div class="title">A</div>
      <div class="description">Choose your shipping options</div>
    </div>
  </div>
  <div class="active step">
    <div class="content">
      <div class="title">B</div>
      <div class="description">Enter billing information</div>
    </div>
  </div>
  <div class=" step">
    <div class="content"><div class="title">Confirm Order</div></div>
  </div>
</div>
                  
            </div>
        );
    }
}

export default App;
