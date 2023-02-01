import React, {Component} from 'react';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/one';
class App extends Component{
  render(){
  return (
    <div className="App">
        <Greet/> 
        <Welcome/>
    </div>
  );
  }
}

export default App;
