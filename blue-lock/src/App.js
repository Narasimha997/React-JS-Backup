import React, {Component} from 'react';
// import './App.css';
// import Message from './component/Message';
// import Product from './components-2/Product';
import Product from './components-2/Product-1';
// import Navbar from './navabar/Navbar';
// import Never from './component/Greet';
import Hello from './component/Hello';
class App extends Component{
  render(){
  return (
    <div>
    {/* <navbar>
     <Message/>
     </navbar> */}
     {/* <Product/> */}
     <Product/>
     {/* <Navbar/> */}
     {/* <Never/> */}
     <Hello/>
    </div>
  );
  }
}

export default App;
 