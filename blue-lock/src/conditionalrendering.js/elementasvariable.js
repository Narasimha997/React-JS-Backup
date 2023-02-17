import React, { Component } from 'react'
class Element extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedin:false
        }
    }
    render(){
        let msg
        if(this.state.isLoggedin){
            msg=<div>Hi</div>
        }
        else{
            msg=<div>bye</div>
        }
        return <div>{msg}</div>
    }
}
export default Element