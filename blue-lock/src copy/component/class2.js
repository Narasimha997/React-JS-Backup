import React, { Component } from "react";
import Retrive from "./class";
class Revieve extends Component{
    name='tony'
    email="namw@gmail.com"
    render(){
        return(
            <div>
                <h3>
                    one
                </h3>
                <Retrive name={this.name} email={this.email}/>
            </div>
        )
    }
}
export default Revieve