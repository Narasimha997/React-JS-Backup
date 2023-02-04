import React, { Component } from "react";
class Message extends Component{
    constructor(){                         // Here we are using constructor & super keyword because we exrends react component class & a call has to be made  to the base class constructor
        super()
        this.state={
            message:'To win this World,'
        }
    }
    changeMessage(){
        this.setState({
            message:'You have to fight'
        })
    }
    render(){
        return(         // return statement can accept single line statement when it has multi lines Parentheses because the jsx spans over mutiple lines so we need an enclosing div tag because react wants only one element returned
            <div>
                <h1>{this.state.message}</h1>           {/* for accessing state inside of the constructor instead of props we have to use "this.state" within the curly bracktes */}
                <button onClick={()=>{this.changeMessage()}}>What you have to do is</button>
            </div>
        )
    }
}
export default Message