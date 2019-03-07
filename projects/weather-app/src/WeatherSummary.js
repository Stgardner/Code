import React, { Component } from 'react';
import {withDataProvider} from "./DataProvider"




class WeatherSummary extends Component {
 
    render() {
        let unix = this.props.sunrise
        let date = new Date(unix*1000)
        let newDate = date.toDateString()
        let number = this.props.currentTemp
        let newNumber = Math.floor(number)
        return(
            
        <div>
            
            <img style={{height: "100px"}}src={`http://openweathermap.org/img/w/${this.props.icon}.png`} alt="weather icon"/>
            <div>{this.props.name}</div>
            <div>{newNumber} ℉ </div>
            <div style={{textTransform: 'capitalize'}}>{this.props.description}</div>
            <div>{newDate}</div>

        </div>
        )
    
    }
}

export default withDataProvider(WeatherSummary);

