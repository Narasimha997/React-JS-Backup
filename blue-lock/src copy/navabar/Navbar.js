import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
class Navbar extends Component{
    render(){
        return(
           <div>
             <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="ml-auto">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-list"><a href="./about.html" className="nav-link">About</a></li>
                        <li className="nav-list"><a href="./contact.html" className="nav-link">Contact</a></li>
                        <li className="nav-list"><a href="./service.html" className="nav-link">Service</a></li>
                        <li className="nav-list"><a href="./Product.html" className="nav-link">Product</a></li>
                    </ul>
                </div>
            </nav>
           </div>
        )
    }
}
export default Navbar