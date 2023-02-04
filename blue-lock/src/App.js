import React, {Component} from 'react';
import './App.css';
// import Message from './component/Message';
import Product from './navabar/Product';
class App extends Component{
  render(){
  return (
    <div>
    {/* <navbar>
     <Message/>
     </navbar> */}
     <Product/>
    </div>
  );
  }
}

export default App;
 