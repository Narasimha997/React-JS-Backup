import React, { Component } from 'react';
import Two from './two';

class One extends Component {
    constructor(props){
        super(props)
        this.state={
            parentName:"Green Apple"
        }
        this.clickHandler=this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            parentName:'Red apple'
        })
    }
    render() {
        return (
            <div>
                <Two name={this.state.parentName}  greet={this.clickHandler}/>
            </div>
        );
    }
}

export default One;