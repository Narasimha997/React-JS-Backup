import React, { Component } from "react";
import '../App.css'
class Sigma extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:true
      }
    }
    render(){
        if(this.state.isLoggedin){
            return <div>Yes</div>
        }
        else{
            return <div>No</div>
        }
    }
}
export default Sigma