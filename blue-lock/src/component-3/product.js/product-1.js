import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.css'
class Product extends Component{
    constructor(props){
        super(props)
        this.state={
            product_name:"Redmi",
            product_price:25000,
            model:'MI Note9 Pro max',
            image:"https://img3.gadgetsnow.com/gd/images/products/additional/small/G144507_View_1/mobiles/smartphones/xiaomi-note-9-pro-max-128-gb-aurora-blue-6-gb-ram-.jpg",
            quantity:0
        
        }
        }
        decr(){
            this.setState({
                quantity:this.state.quantity-1
            })
            
        }
        incr(){
            this.setState({
                quantity:this.state.quantity+1
            })
        }
        render(){
            return(
                <div>
                <div>
                <div className="container">
                <div className="row">
                    <div className="col-8">
                           <table className="table">
                           <thead>
                                <tr>
                                    <th>Model</th>
                                    <th>Prodcut_name</th>
                                    <th>Image</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.model}</td>
                                    <td>{this.state.product_name}</td>
                                    <td><img src={this.state.image} alt=''/></td>
                                    <td><i className="fa fa-minus-circle" onClick={()=>{this.decr()}}></i>{this.state.quantity}<i className="fa fa-plus-circle" onClick={()=>{this.incr()}}></i></td>
                                    <td>{this.state.quantity * this.state.product_price}</td>
                                </tr>
                            </tbody>
                            </table>
                </div>
                </div>
                </div>
                </div>
                </div>
            )
        }
}
export default Product