import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
class Product extends Component{
    constructor(props){
        super(props)
        this.state={
            singer_name:"Elthon Jhon",
            song_name:"I'm Still Standing",
            image:"https://img.cdandlp.com/2018/07/imgL/119247102.jpg",
            quantity:1,
            price:"€"+1.58 
        }
    }
    decrHandler(){
        this.setState({
            quantity:this.state.quantity-1
        })
    }
    incrHandler(){
        this.setState({
            quantity:this.state.quantity+1
        })
    }
    render(){
        return(
            <div className="container">
            <div className="row">
                <div className="ml-auto">
                <table className="table table-hover">
                    <thead className="bg-primary">
                        <tr>
                            <th>Singer Name</th>
                            <th>Song Name</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                        <tbody>
                            <tr>
                                <td>{this.state.singer_name}</td>
                                <td>{this.state.song_name}</td>
                                <td>{this.state.image}</td>
                                <td><i className="fa fa-minus-circle" onClick={()=>{this.decrHandler()}}></i>{this.state.quantity}<i className="fa fa-plus-circle" onClick={()=>{this.decrHandler()}}></i></td>
                                <td>{this.state.quantity * this.state.price}</td>
                            </tr>
                        </tbody>
                    </thead>
                </table>
                </div>
            </div>
            </div>
        )
    }
}
export default Product