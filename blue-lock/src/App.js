import React from "react";
// import Product from "./component-3/product.js/product-1";
// import Before from "./component-3/Hi";
// import Ref from "./component-3/function";
// import Flip from "./component-3/withoutJSX";
// import Mi from "./component-3/class&props-2";
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Navbar from "./navabar/Navbar";
import Product from "./component-3/product.js/product-1";
const App=()=>{
  return (
    <div>
      {/* <Before/> */}
      {/* <Ref/> */}
      {/* <Flip/> */}
      {/* <Mi/> */}
      {/* <Product/> */}
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/blue-lock/src/component-3/product.js/product-1.js' element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App