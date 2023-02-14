import React, { Component } from "react";
import Childrencomponent from "./class";
class ParentComponent extends Component{
    name='tony'
    email="namw@gmail.com"
    render(){
        return(
            <div>
                <h3>
                    one
                </h3>
                <Childrencomponent name={this.name} email={this.email}/>
            </div>
        )
    }
}
export default ParentComponent