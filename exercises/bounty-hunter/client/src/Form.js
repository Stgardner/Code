import React, { Component } from 'react';
import {withDataProvider} from "./DataProvider"
import Axios from 'axios';
import PropTypes from 'prop-types'
import uuid from "uuid"


class Form extends Component {
    constructor(props) {
    super(props)
    this.state = {
        inputs: {
            firstName: "",
            lastName: "",
            living: "",
            bountyAmount: "",
            type: "",
            _id: uuid.v4()
        },
        list: []
    }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

handleChange = (e) => {
    let {name, value} = e.target
    this.setState(prevState=>({
        inputs: {
            ...prevState.inputs,
            [name]: value
        }
    }))
    
    
    }

handleSubmit(event) {
    event.preventDefault();
    Axios.post("/bounties", this.state.inputs).then(res=>{
        this.setState(prevState=>({
            list: [...prevState.list,res.data],
            inputs:{
                firstName: "",
                lastName: "",
                living: "",
                bountyAmount: "",
                type: "",
                _id: uuid.v4()

            }
            
        }))

        
    })
    console.log(this.state.inputs)
}



    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                    <br />
                    <input type="radio" name="living" value="true" onChange={this.handleChange}/>Alive
                    <input type="radio" name="living" value="false" onChange={this.handleChange}/>Dead
                    <br />
                    <input type="text" placeholder="Bounty" name="bountyAmount" onChange={this.handleChange}/>
                    <input type="text" placeholder="Jedi or Sith?" name="type" onChange={this.handleChange}/>
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
Form.propTypes = {
    living: PropTypes.bool
}

export default withDataProvider(Form);