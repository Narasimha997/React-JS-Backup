import React, {Component} from 'react';
import './App.css';
// import Greet from './component/Greet';
// import Welcome from './component/one';
// import Hello from './component/Hello';
import Hi from './component/greet-1';
class App extends Component{
  render(){
  return (
    <div className="App">
        {/* <Greet/>  */}
        
        {/* <Hello name="Bruce" Heroname="Batman">
          <p>This is childern props</p>
        </Hello>
        <Hello name="Clerk" Heroname="Super-Man"/>
        <button>Action</button>
        <Hello name="Tony Stark" Heroname="Iron-Man"/>
        <Welcome name="Bruce" Heroname="Batman"/>
        <Welcome name="Clerk" Heroname="Super-Man"/>
        <Welcome name="Tony Stark" Heroname="Iron-Man"/> */}
        <Hi/>               {/* It is an custom created tag with self closing */}

    </div>
  );
  }
}

export default App;
 