import React, {Component, createContext} from "react"
import axios from "axios"
export const {Consumer, Provider} = createContext()

export default class DataProvider extends Component {
    constructor() {
    super() ;

    this.state = {
    
        list: []
    }

}
componentDidMount() {
axios.get('/bounties').then(response => {
    this.setState({
        list: response.data,
    })
   
}) 
}


render() {
    const value = {
        ...this.state,
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
        {value => <C {...value}{...props} />}
    </Consumer>
)

