import React from "react";

const Vacation = (props) => {
    const styles = {
        border: "dotted",
        height: 250,
        textAlign: "center",
    
    }
    if (props.timeToGo === "Spring") {
        styles.backgroundColor= "green"
    }
    if (props.timeToGo === "Summer") {
        styles.backgroundColor = "yellow"
    }
    if (props.timeToGo === "Fall") {
        styles.backgroundColor = "orange"
    }
    if (props.timeToGo === "Winter") {
        styles.backgroundColor = "grey"
    }
    return (
        <div style={styles}>
            <h1>Travel Location:<br></br><span style={{color:"white"}}>{props.place}<hr></hr></span></h1>
            <h2>Price: <a style={{color:"white"}}>{props.price}<hr></hr></a></h2>
            <h3>Time To Go: <a style={{color:"white"}}>{props.timeToGo}</a></h3>
        </div>
    )

}
export default Vacation