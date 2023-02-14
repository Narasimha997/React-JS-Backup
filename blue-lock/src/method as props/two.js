import React from 'react';
import '../App.css';
function Two(props) {
  return (
    <div className="App">
      <h1>Bind event :{props.name}</h1>
      <button onClick={props.greet}>Real</button>
    </div>
  );
}

export default Two;
