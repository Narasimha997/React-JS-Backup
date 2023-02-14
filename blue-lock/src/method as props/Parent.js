import React, { Component } from 'react'
import Children from './Children'

class Parent extends Component {
    constructor(props){
        super(props)
        this.state={
            parentName:"parent"
        }
        this.greetParent=this.greetParent.bind(this)
    }
    greetParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    render() {
    return (
        <div>
        <Children greetHandler={this.greetParent}/>
        </div>
    )
  }
}
export default Parent