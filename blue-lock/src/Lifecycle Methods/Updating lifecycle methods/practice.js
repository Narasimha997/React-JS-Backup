import React, { Component } from "react";
import Lifecyclewheel1 from "./practice copy";
class Lifecyclewheel extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Injury"
      }
      console.log("Lifecyclewheel Constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("Lifecyclewheel Get Derived");
        return null
    }
    componentDidMount(){
        console.log("Lifecyclewheel ComponentDidMount");
    }
    
    shouldComponentUpdate(){
        console.log("Lifecyclewheel should Update");
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Lifecylewheel getsnapshot");
        return null
    }
    componentDidUpdate(){
        console.log("Lifecyclewheel didupdate");
    }
    itLeaves=()=>{
        this.setState({
            name:"scar"
        })
    }
    render(){
        console.log("Lifecyclewheel Render");
        return(
            <div>
                <h1>{this.state.name}</h1>
                {/* <Lifecyclewheel1/> */}
                <button onClick={this.itLeaves}>It leaves</button>
            </div>
        )
    }
}
export default Lifecyclewheel