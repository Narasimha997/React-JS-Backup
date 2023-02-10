import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Navbar from "./navbar/navbar";
import Product from "./navbar/product";
const App=()=>{
  return (
    <div>
   <Router>
    <Navbar/>
    <Routes>
    <Route path="./navbar/product" element={<Product/>}/>
    </Routes>
   </Router>
    </div>
  )
}
export default App