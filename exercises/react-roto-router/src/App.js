import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main"
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";


function App () {

  return (
      <div>
          <Navbar/>  
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
              <Route path="/contact" component={Contact}/>
          </Switch>
          <Main />
          <Footer />
      </div>
  )
}




export default App;
