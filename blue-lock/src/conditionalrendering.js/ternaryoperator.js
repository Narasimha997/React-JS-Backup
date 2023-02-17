import React, { Component } from "react";
class Ternary extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedin:false
        }
    }
    render(){
        return(
            this.state.isLoggedin?<div>Hi</div>:<div>bye</div>
        )
    }
}
export default Ternary