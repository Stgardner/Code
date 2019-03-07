import React, { Component, createContext } from 'react'

export const {Consumer, Provider} = createContext()

export default class DataProvider extends Component {
    constructor(){
        super();
        this.state = {
            
        }
    }

    getWeather = async (zipCode, country) => {
        const apiCall = await fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},us&units=imperial&appid=10ad8ead00d1182d923a215ed2b8049a`)
        const data = await apiCall.json()
        console.log(data)
        this.setState({icon: data.weather[0].icon, name: data.name, currentTemp: data.main.temp, description: data.weather[0].description, sunrise: data.sys.sunrise})
    
    }

    buttonClick = (formData) => {
        const {zipCode, country} = formData
    this.getWeather(zipCode, country)
    }

    render() {
        const value = {
            ...this.state,
            buttonClick:this.buttonClick,
            
        }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        )
    }
}


export const withDataProvider = C => props => (
    <Consumer>
        {value =>  <C {...value}{...props} />}
    </Consumer>
)