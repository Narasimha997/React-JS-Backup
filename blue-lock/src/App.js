import React, {Component} from 'react';
import './App.css';
import Greet from './component/Greet';
import Welcome from './component/one';
import Hello from './component/Hello';
class App extends Component{
  render(){
  return (
    <div className="App">
        {/* <Greet/>  */}
        {/* <Welcome/> */}
        <Hello/>
    </div>
  );
  }
}

export default App;
