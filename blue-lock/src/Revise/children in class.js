import React, { Component } from 'react'

class Children extends Component{
  render(){
    return(
      <div>
        <h2>{this.props.name}</h2>
        <h2>{this.props.email}</h2>
      </div>
    )
  }
}
export default Children