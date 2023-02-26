import React, { Component } from "react";
import '../App.css'
class Third extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn:false
      }
    }
    render(){
        return(
            
            this.state.isLoggedIn ? <div>Hello</div> : <div>Bye</div>
   
        )
    }
}
export default Third