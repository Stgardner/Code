import React from "react";


const Infobox = (props) => {
    const styles = {
      fontSize: "2em",
      border: "dotted",
      backgroundColor: props.color,
      margin: 0,
      height: "300px",
      textAlign: "center",
      justifyContent: "space-around",
    }
    return (
      <div style={styles}>
        <h2>{props.title}</h2>
        <h3>{props.subtitle}</h3>
        <p>{props.information}</p>
      </div>
    )
    
  }
 
export default Infobox