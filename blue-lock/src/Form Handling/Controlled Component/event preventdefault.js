import React, { Component } from 'react';
import image from './aesthetic.jpg'
class Form3 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      textarea:"",
    };
    
  }
  email = (event) => {
    this.setState({
      email: event.target.value
    });
  };
  textareaHandler=(event)=>{
    this.setState({
        textarea:event.target.value
    })
  }
  selectHandler=(event)=>{
    this.setState({
        select:event.target.value
    })
  }
  submitHandler=(event)=>{
    alert(`${this.state.email} ${this.state.textarea} ${this.state.select}`)
    event.preventDefault()
  }
  render() {
    console.log("URL set:",image)
    return (
       <div style={{backgroundImage: `url(${image})`,backgroundRepeat:`no-repeat`,backgroundSize:`cover`,height:`100vh`,backgroundPosition:`fixed center`,width:`cover`}}>
         <form onSubmit={this.submitHandler} >  <div>
     
    <div> <label style={{color:`red`}}>Email ID</label>&nbsp;&nbsp;
    <input type="text" value={this.state.email} onChange={this.email}/></div><br/>
  <div>
  <label style={{color:`white`}}>Textarea</label>&nbsp;&nbsp;
    <textarea rows="4" cols="50" maxLength="200" onChange={this.textareaHandler}></textarea>
  </div><br/>
  <div>
  <label style={{color:`green`,textAlign:`center`}}>course</label>
    &nbsp;&nbsp;<select onChange={this.selectHandler}>
        <option>React</option>
        <option>Angular</option>
        <option>Vue</option>
    </select>
  </div><br/>
    <div>
    <button type="submit">Submit</button>
    </div>
    </div>
    </form>
    </div>
       

    
    );
  }
}
export default Form3;
