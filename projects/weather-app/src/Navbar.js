import React from "react";
import { Link } from "react-router-dom"

const Navbar = () => {
    const styles = {
        color: "black",
        textSize: "3em",
        marginLeft: 30,
        marginBottom: 0
       
        }
    return (
        <div>
            <Link style={styles} to="/">Home</Link>
            <Link style={styles} to="/weather">Weather</Link>
            <Link style={styles} to="/details">Details</Link>
        </div>
    )
}

export default Navbar