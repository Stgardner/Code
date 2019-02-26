import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super()
    this.state = {
      firstName:"",
      lastName:"",
      list:[]
    }

  }

  handleChange = (event) => {
    this.setState ({[event.target.name]: event.target.value})
  }

  handleClick = () => {
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let joined = firstName + ' ' + lastName

    this.setState(prevstate => {
      return {
        list:[...prevstate.list, joined]
      }
    })
  }

  render() {
    return (
      <div>
        <input name={"firstName"} placeholder={"firstName"} onChange={this.handleChange}/>
        <input name={"lastName"} placeholder={"lastName"} onChange={this.handleChange}/>
        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <button onClick={this.handleClick}>Add Here</button>
        <ol>{this.state.list.map(item => <li>{item}</li>)}</ol>
      </div>
    )
  }

}


export default App;
