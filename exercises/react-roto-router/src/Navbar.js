import React from "react";
import { Link } from "react-router-dom";

function Navbar (props) {
    const styles = {
        color: "black",
        textSize: "3em",
        marginLeft: 30,
        marginBottom: 0
       
        }
    return (
        <div className="nav" style={{backgroundColor: "#e6c12e", margin: 0}}>
            <Link style={styles} to="/">Home</Link>
            <Link style={styles} to="/about">About</Link>
            <Link style={styles} to="/contact">Contact</Link>
        </div>
    )
}

export default Navbar;