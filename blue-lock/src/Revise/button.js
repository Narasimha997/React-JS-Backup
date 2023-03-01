import React, { Component } from "react";
class Button extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Levi",
         position:"Captain"
      }
    }
    clickHandler=()=>{
        this.setState({
            name:"Levi",
            position:"Captain of Survey Corps"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.name}</h1>
                <h2>{this.state.position}</h2>
                <button onClick={this.clickHandler}>Click Here</button>
            </div>
        )
    }
}
export default Button