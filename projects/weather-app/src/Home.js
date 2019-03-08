import React from "react";
import Form from "./Form"


const Home = () => {
    const styles = {
        textAlign: "center",
        margin: "auto",
        marginBottom: "100",
        fontSize: "3.5em"

    }
    return (
        <div style={{ backgroundImage: "url("+ "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/B-wmtY8xinajljp5/vast-open-plains-stretch-out-to-the-horizon_hwpulklkl__F0000.png" + ")",
        backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', height: "700px"}}>
            <div>
                <br></br>
                <h1 style={{textAlign: "center", margin: "auto", marginBottom: "80px",marginTop: "79px", fontSize: "3.5em"}}>Weather Forecast</h1>
                <br></br>
                <p style={{textAlign: "center", margin: "auto", marginBottom: "100px",fontSize: "1.5em"}}>Get weather for any location simply by entering the zip code.</p>
                <br></br>
                <Form style={{textAlign: "center", margin: "auto", marginBottom: "100px",fontSize: "3.5em"}}/>
                <br></br>
            </div>

        </div>
    )
}

export default Home