import React, {Component } from 'react';

class App extends Component {
  constructor(){
    super()

    this.state = {
      counter: 0
    }
  }

  add = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter +1
      }
    })
  }
  subtract = () => {
    this.setState((prevState) => {
      return {
        counter: prevState.counter -1 
      }
    })
  }

  render(){
    return (
      <div>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.subtract}>SUBTRACT THIS HOE</button>
        <button onClick={this.add}>ADD</button>
      
      
      </div>
    )
  }
}



export default App
