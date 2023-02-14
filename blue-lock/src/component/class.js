import React, {Component} from 'react';

 class Childrencomponent extends Component{
    render(){
        return( 
      <div>
        <h1>Class Component</h1>
        <h1>{this.props.name}</h1>
        <h1>{this.props.email}</h1>
      </div>
        )
    }
}
export default Childrencomponent