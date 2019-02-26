import React, {Component} from 'react';
import "./App.css";

class App extends Component {
  constructor() {
      super()

      this.state = {
       count: 0,
       count2: 0,
       box1: "white",
       box2: "white",
       box3: "white",
       box4: "white",
       borderRadius: 0,
       webkitTransform: 0,
       msTransform: 0,
       boxShadow: 0,
       transform: 0
      }
    }
    
    changeColor = () => {
      if(this.state.box1 === "white") {
        let newColor = "black"
        this.setState({box1: newColor}) 
        this.setState({box2: newColor}) 
        this.setState({box3: newColor}) 
        this.setState({box4: newColor}) 
      } 
      else {
        let newColor = "white"
        this.setState({box1: newColor}) 
        this.setState({box2: newColor}) 
        this.setState({box3: newColor}) 
        this.setState({box4: newColor}) 
      }
         
    }

    party = () => {
      let newColor = "purple"
      this.setState({box1: newColor})
      this.setState({box2: newColor})
    }

    professional1 = () => {
      let newColor = "blue"
      this.setState({box3: newColor})
    }
    professional2 = () => {
      let newColor = "blue"
      this.setState({box4: newColor})
    }
    wildcard1 = () => {
      if(this.state.count%2 === 0) {
        this.setState({borderRadius: "50%"})
    } else {
      this.setState({borderRadius: 0})
    }
    this.setState((prevState) => {
      return {
        count: prevState.count +1
      }
    })
  }
  wildcard2 = () => {
    if(this.state.count%2 === 0) {
      this.setState({webkitTransform: "rotateZ(-30deg)", msTransform: "rotateZ(-30deg)", transform: "rotateZ(-30deg)" })
      
  } else {
    this.setState({webkitTransform: "rotateZ(0deg)", msTransform: "rotateZ(0deg)", transform: "rotateZ(0deg)"})
  }
  this.setState((prevState) => {
    return {
      count: prevState.count +1
    }
  })
}
wildcard3 = () => {
  if(this.state.count%2 === 0) {
    this.setState({boxShadow: "inset 0 0 0 55px #53a7ea"})
    
} else {
  this.setState({boxShadow: "inset 0 0 0 0px #53a7ea"})
}
this.setState((prevState) => {
  return {
    count: prevState.count +1
  }
})
}
wildcard4 = () => {
  let newColor = "teal"
  if(this.state.count%2 === 0) {
    this.setState({box4: newColor})
    
} else {
  this.setState({box4: "white"})
}
this.setState((prevState) => {
  return {
    count: prevState.count +1
  }
})
}
    

  render() {
    return (
      <div className="grid">
        <div className="box" style={{backgroundColor: this.state.box1, webkitTransform: this.state.webkitTransform, msTransform: this.state.msTransform, transform: this.state.transform }}></div>
        <div className="box" style={{backgroundColor: this.state.box2, borderRadius: this.state.borderRadius}}></div>
        <div className="box" style={{backgroundColor: this.state.box3, boxShadow: this.state.boxShadow}}></div>
        <div className="box" style={{backgroundColor: this.state.box4}}></div>
        <button classname="button" onClick={this.changeColor}>Small Time</button>
        <button classname="button" onClick={this.party}>Party DJ</button>
        <button classname="button" onClick={this.professional1}>Professional DJ 1</button>
        <button classname="button" onClick={this.professional2}>Professional DJ 2</button>
        <button classname="button" onClick={this.wildcard1} >WildCard 1</button>
        <button classname="button" onClick={this.wildcard2} >WildCard 2</button>
        <button classname="button" onClick={this.wildcard3} >WildCard 3</button>
        <button classname="button" onClick={this.wildcard4} >WildCard 4</button>
      </div>
    )
  }

}

export default App;
