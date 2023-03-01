import React, { Component } from 'react'

class Click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"sample"
      }
    //   this.clickbutton=this.clickbutton.bind(this)

    }
    clickbutton=()=>{
        this.setState({
            name:"original"
        })
    }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.clickbutton}>JOJO</button>
        {/* <button onClick={this.clickbutton.bind(this)}>JOJO</button> */}
        {/* <button onClick={()=>this.clickbutton()}>JOJO</button> */}
      </div>
    )
  }
}

export default Click