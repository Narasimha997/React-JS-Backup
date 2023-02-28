import React, { Component } from "react";
class LifecycleA extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Mi"
      }
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycle static");
        return null
    }
    componentDidMount(){
        console.log("lifecycle component")
       }

    shouldComponentUpdate(){
        console.log("LifecycleA Should Update");
        return true
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifecycleA Snapshot");
        return null;
    }
    componentDidUpdate(){
        console.log("LifecycleA Did Update");
    }
   
       clickHandler=()=>{
        this.setState({
            name:"Redmi"
        })
       }
       render() {
        return (
            <div>
            <h1>{this.state.name}</h1>
                <button onClick={this.clickHandler}> Change</button>
            </div>
        );
       }
}
export default LifecycleA