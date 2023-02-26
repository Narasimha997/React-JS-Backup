import React, { Component } from 'react'

class Conditional extends Component {
    constructor(props){
        super(props)
        this.state={
            isLoggedin:true
        }
    }
  render() {
    let msg;
    if(this.state.isLoggedin){
        msg=<div>Yes you're</div>
    }
    else{
        msg=<div>No you're not that guy</div>
    }
    return <div>{msg}</div>
  }
}

export default Conditional