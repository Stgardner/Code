import React from 'react';
import { Switch, Route } from "react-router-dom"
import Home from "./Home"
import Navbar from "./Navbar"
import Weather from "./Weather"
import Details from "./Details"


function App () {
  
    return (
      <div>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/weather" component={Weather}/>
            <Route path="/details" component={Details}/>
          </Switch>
    </div>
  )
    }

export default App;
