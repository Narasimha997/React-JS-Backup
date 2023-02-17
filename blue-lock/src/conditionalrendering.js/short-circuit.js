import React, { Component } from "react";
class Four extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedin:false
      }
    }
    rendr(){
        return this.state.isLoggedin && <div><h1>Yo</h1></div>
    }
}
export default Four