import React, { Component } from "react";
import One from "./one";
class Two extends Component{
    name="Giga"
    id=1;
    number=9876453210;
    render(){
        return(
            <h1>
                <One name={this.name} id={this.id} number={this.number}/>
            </h1>
        )
    }
}
export default Two