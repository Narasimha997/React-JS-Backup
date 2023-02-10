import React, {Component} from 'react';

 class Retrive extends Component{
    render(){
        return( 
      <div>
        <h1>Class Component</h1>
        <h3>{this.props.name}</h3>
        <h3>{this.props.email}</h3>
      </div>
        )
    }
}
export default Retrive