import React, { Component } from 'react'
// import '.../App.js'

 class Lifecyclechildren extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'unknown'
        }
        console.log("lifecycle constructor");
    }
    static getDerivedStateFromProps(props,state){
        console.log("lifecycle static");
        return null
    }
   componentDidMount(){
    console.log("lifecycle component")
   }
  render() {
    console.log("Lifecycle Render");
    return (
  
      <div>LIfe A</div>
    )
  }
}

export default Lifecyclechildren