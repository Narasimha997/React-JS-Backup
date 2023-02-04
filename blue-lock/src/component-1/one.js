import React, { Component } from "react";
class One extends Component{
    render(){
        return(
            <div>
                <h4>{this.props.name}</h4>
                <h4>{this.props.id}</h4>
                <h4>{this.props.number}</h4>
            </div>
        )
    }
}
export default One