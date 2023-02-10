import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom'
class Navbar extends Component{
    render(){
        return(
            <div>
                <nav className='navbar navbar-dark bg-drak navbar-expand-lg'>
                <div className='ml-auto'>
                    <ul className='navbar nav-ml-auto'>
                    <li className='nav-list'><Link to='./product.js' className='nav-link'>Product</Link></li>
                    <li className='nav-list'><Link to='' className='nav-link'>Contact</Link></li>
                    </ul>
                </div>
                    
                </nav>
            </div>
        )
    }
}
export default Navbar