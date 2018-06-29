import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hidden from './Hidden';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      NameText:'',
      submit:false
    }
  }
  onTextChange(event){
    console.log(event);
    this.setState({NameText:event.target.value});
  }
  hidden(){
    if(this.state.submit){
      return <Hidden show={this.state.NameText} />
    }

  }

  onSubmit(event){
    console.log(event);
    this.setState({submit:true});
  }
  render() {
    return (
      <div>
      <form>
      <label>Name:
      <input type="text" name="name" onChange={this.onTextChange.bind(this)}/>
      </label>
      </form>
        <button onClick={this.onSubmit.bind(this)}> Submit</button>

    {this.hidden()}
    </div>
    );
  }
}

export default App;
