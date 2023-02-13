import React, { Component } from "react";
class Event extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"Good"
      }
    this.clickHandler=this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         msg:"no"
    //     })
    // }
    clickHandler=()=>{
        this.setState({
            msg:'no'
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                {/* <button onClick={this.clickHandler.bind(this)}>Submit</button>      the first step to approach the event bind handling */}
                {/* <button onClick={()=>this.clickHandler()}>Submit</button>   The second step to approach the event bind handling                  Here the parentheses is important because we are callling event handler andd return */}
                {/* <button onClick={this.clickHandler}>Submit</button>       The third step to approach the event handling Here we pass the bind method in the constructor method  */}
                <button onClick={this.clickHandler}>Submit</button>
            </div>
        )
    }
}
export default Event