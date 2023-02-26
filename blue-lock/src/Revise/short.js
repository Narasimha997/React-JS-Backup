import React, { Component } from "react";
import '../App.css'
class Screen extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:true
      }
    }
    render(){
        return(
            this.state.isLoggedin && <div className="App">Loged</div>
        )
    }
}
export default Screen