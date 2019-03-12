import React from "react"

const Details = () => {
    const styles = {
        width: "100%",
        backgroundSize: "cover",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: "url("+ "https://images.unsplash.com/46/iYvDeqVGRbebiQv2PIJi_DSC_8407.JPG?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"+ ")"
    }
    return (
        <div style={styles}>
            <h1 style={{textAlign: "center"}}>About This App</h1>
            <p style={{textAlign: "center"}}>This app was made using the <a href="https://openweathermap.org">Open Weather Map Api</a>. Here you can access current 
                weather data for almost any location. Data is pulled from over 40,000 weather stations.
            </p>
            <h1 style={{textAlign: "center"}}>Contact</h1>
            <p style={{textAlign: "center"}}>Built by Stuart Gardner in <strong>React.</strong></p>
            <img className="react-badge" src="https://www.logolynx.com/images/logolynx/e1/e1d2fcf29877eb842ac100cbb3329119.png"
                alt="react badge" style={{width: "10%", height: "20%"}}/>
          <p style={{textAlign: "center"}}>Email:  stuarttgardner@gmail.com</p>
        </div>

    )
}

export default Details