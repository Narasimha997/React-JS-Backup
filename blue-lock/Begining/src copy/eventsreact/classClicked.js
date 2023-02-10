import React, { Component } from "react";
class Clap extends Component{
    clickHandler(){
        console.log("Button Clicked");
    }
    render(){
        return(
            <div>
                <button onClick={this.clickHandler}> Button class</button>
                <button onClick={this.clickHandler()}> Button class</button>
            </div>
        )
    }
}
export default Clap