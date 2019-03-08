import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    const styles = {
        color: "white",
        fontSize: "2em",
        marginLeft: "19%",
        marginTop: "9%",
        textAlign: "center"
    }
    
    return (
        <div style={{backgroundColor: "black", height: "40px"}}>
            <Link style={styles} to="/">Home</Link>
            <Link style={styles} to="/weather">Weather</Link>
            <Link style={styles} to="/details">Details</Link>
            <br></br>
        </div>
    )
}

export default Navbar