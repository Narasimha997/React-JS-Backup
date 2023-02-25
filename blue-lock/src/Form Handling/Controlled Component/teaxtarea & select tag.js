import React, { Component } from 'react';
class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      textarea:"",
      select:""
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
  render() {
    return (
        <form>  <div>
     
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
        </div>
        </form>

    
    );
  }
}
export default Form1;
