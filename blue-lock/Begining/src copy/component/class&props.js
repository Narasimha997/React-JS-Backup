import React, {Component} from 'react';

 class Welcome extends Component{
    render(){
        /* In functional component we specify 'props' as a parameter but in class component the properties are avaliable 
           through "this.props" which is reserved in class components */
        return <h1>Welcome {this.props.name} {this.props.Heroname}</h1>
    }
}
export default Welcome