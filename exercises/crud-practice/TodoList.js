import React, { Component } from 'react';
import axios from 'axios';

class TodoList extends component {
    constructor(){
    super()

    this.state = {
        inputs: {
            title: '',
            description: ''
        },
        todos: []
    }
}

    async ComponentDidMount(){
        const response = await axios.get('https://api.vschool.io/stuart/todo')
        this.setState({
            todos: response.data
        })
    }

    render(){
        return (
            <div>

            </div>
        )
    }
}