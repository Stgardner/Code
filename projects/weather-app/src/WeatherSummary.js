import React, { Component } from 'react';
import {withDataProvider} from "./DataProvider"


class WeatherSummary extends Component {
 
    render() {
        
        //converting unix
        let unix = this.props.sunrise
        let date = new Date(unix*1000)
        let newDate = date.toDateString()
    
        let number = this.props.currentTemp
        let newNumber = Math.floor(number)
        let tempMax = this.props.temp_max
        let newTempMax = Math.floor(tempMax)
        let tempMin = this.props.temp_min
        let newTempMin = Math.floor(tempMin)


        
        
        return(
            
        
            <div className="beep">
            <img className="weatherIcon" src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather icon"/>
            <h1 style={{textAlign: "center", margin: "auto", marginBottom: "30px",fontSize: "3.5em",}}>{this.props.name}</h1>
            <div style={{textAlign: "center", margin: "auto", marginBottom: "20px",fontSize: "1.8em"}}>{newNumber} ℉ </div>
            <div style={{textTransform: 'capitalize', textAlign: "center", margin: "auto", marginBottom: "20px",fontSize: "1.8em"}}>{this.props.description}</div>
            <div style={{textTransform: 'capitalize', textAlign: "center", margin: "auto", marginBottom: "20px",fontSize: "1.8em"}}>{newDate}</div>
            <div style={{textTransform: 'capitalize', textAlign: "center", margin: "auto", marginBottom: "20px",fontSize: "1.8em"}}>{newTempMin}℉   Low / {newTempMax}℉  High</div>
           
            </div>
            
        
        )
    
    }
}

export default withDataProvider(WeatherSummary);

