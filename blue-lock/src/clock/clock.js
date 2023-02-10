import React, { Component } from 'react'
class Time extends Component{
    constructor(props){
        super(props)
        this.state={
            ct:new Date().toLocaleTimeString()
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({ct:new Date().toLocaleTimeString()})
        },1000)
    }
    render(){
        return(
            <div className='container'>
          <div className='row'>
          <div className='col-md-6'>
            <div className='card'>
              <div className='card-header bg-success text-white'>
              <h1>Time</h1>
              <h3>{this.state.ct}</h3>
              </div>
              </div></div>
              </div>
              </div>
        )
    }
}
export default Time