import React, { Component } from "react";
import '../App.css'
class Ifelse extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }
    }
    render(){
        if(this.state.isLoggedIn){
            return<div className="App">hi</div>
        }
        else{
            return <div className="App">hello</div>
        }
    }
}
export default Ifelse