import React, { Component } from "react";
class Lifecyclewheel1 extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Injury"
      }
      console.log("Lifecyclewheel1 Constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("Lifecyclewheel1 Get Derived");
        return null
    }
    componentDidMount(){
        console.log("Lifecyclewheel1 ComponentDidMount");
    }
    
    shouldComponentUpdate(){
        console.log("Lifecyclewheel1 shoild Update");
        return null
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Lifecylewheel getsnapshot");
        return null
    }
    componentDidUpdate(){
        console.log("Lifecyclewheel1 didupdate");
    }
    itLeaves=()=>{
        this.setState({
            name:"scar"
        })
    }
    render(){
        console.log("Lifecyclewheel1 Render");
        return(
            <div>
                <h1>{this.state.name}</h1>
            </div>
        )
    }
}
export default Lifecyclewheel1