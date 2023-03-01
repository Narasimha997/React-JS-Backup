import React, { Component } from "react";
class User extends Component{
    constructor(props) {
      super(props)
    
      this.state = {
         email:"",
         textarea:"",
         select:"ONE PIECE"
      }
    }
    email=(event)=>{
        this.setState({
            email:event.target.value
        })
    }
    textarea=(event=>{
        this.setState({
            textarea:event.target.value
        })
    })
    select=(event)=>{
        this.setState({
            select:event.target.value
        })
    }
    submit=(event)=>{
        alert(`${this.state.email} ${this.state.textarea} ${this.state.select}`)
        event.preventDefault()
    }
    render(){
        return(
            <div>
               <form onSubmit={this.submit}>
               <label>Email ID</label>
                <input type="text" value={this.state.email} onChange={this.email}/>
                <label>Textarea</label>
                <textarea value={this.state.textarea} onChange={this.textarea}></textarea>
                <select  onChange={this.select} >
                    <option value="ONE PIECE">ONE PIECE</option>
                    <option value="BLEACH">BLEACH</option>
                    <option value="NARUTO">NARUTO</option>
                </select>
                <button type="submit"> submit</button>
               </form>
            </div>
        )
    }
}
export default User