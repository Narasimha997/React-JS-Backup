import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom'
class Navbar extends Component{
    render(){
        return(
           <div>
             <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="ml-auto">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-list"><Link to="/blue-lock/src/component-3/product.js/product-1.js" className="nav-link">Product</Link></li>
                        <li className="nav-list"><Link to="./contact.html" className="nav-link">Contact</Link></li>
                        <li className="nav-list"><Link to="./service.html" className="nav-link">Service</Link></li>
                        <li className="nav-list"><Link to="./Product.html" className="nav-link">Product</Link></li>
                    </ul>
                </div>
            </nav>
           </div>
        )
    }
}
export default Navbar