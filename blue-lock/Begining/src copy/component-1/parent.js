import React, { Component } from "react";
import Four from "./children";
class Three extends Component{
    Product_name="Jam"
    Price=45;
    company_name="Kissan"
    render(){
        return(
            <Four Product_name={this.Product_name} Price={this.Price} company_name={this.company_name}/>
        )
    }
}
export default Three