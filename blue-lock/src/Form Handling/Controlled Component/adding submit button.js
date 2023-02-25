import React, { Component } from 'react';
class Form2 extends Component {
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
  }
  render() {
    return (
        <form onSubmit={this.submitHandler} >  <div>
     
         <label>Email ID</label>
        <input type="text" value={this.state.email} onChange={this.email}/>
      <label>Textarea</label>
        <textarea rows="4" cols="50" maxlength="200" onChange={this.textareaHandler}></textarea>
      <label>course</label>
        <select onChange={this.selectHandler}>
            <option>React</option>
            <option>Angular</option>
            <option>Vue</option>
        </select>
        <button type="submit">Submit</button>
        </div>
        </form>

    
    );
  }
}
export default Form2;
