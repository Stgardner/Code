import React, { Component } from 'react';
import Navbar from "./Navbar"
import BlogPost from "./Blogpost"

const App = () =>{
  return (
    <div>
      <Header />
        <Navbar />
      <BlogList />
        <BlogPost />
      <Footer />
</div>
)
}

export default App;
