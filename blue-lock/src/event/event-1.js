import React, { Component } from "react";
class Event1 extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         msg:"hello"
      }
      this.handHandler=this.handHandler.bind(this)
    }
    handHandler(){
        this.setState({
            msg:"bye"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.msg}</h1>
                {/* <button onClick={this.handHandler.bind}>Submit</button> */}
                {/* <button onClick={()=>{this.handHandler()}}>Submit</button> */}
                <button onClick={this.handHandler}>Submit</button>
            </div>

        )
    }
}
export default Event1