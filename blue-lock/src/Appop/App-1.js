import React, {Component} from 'react';
import './App.css';
// import Greet from './component/Greet';
// import Retrive from './component/class';
// import Welcome from './component/class&props';
// import Hello from './component/Hello';
// import Hi from './component/greet-1';
import After from '../component/Hi';
// import Retrive from './component/class';
import Revieve from '../component/class2';
import Two from '../component-1/two';
import Three from '../component-1/parent';
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
        <Welcome name="Tony Stark" Heroname="Iron-Man"/>
        {/* <Hi/>                It is an custom created tag with self closing */}
        <After/>
        {/* <Retrive name="Tonystark"/> */}
        {/* <Retrive/>
        <Retrive/>
        <Retrive/> */}
        <Revieve/>
        <Two/>
        <Three/>
    </div>
  );
  }
}

export default App;
 