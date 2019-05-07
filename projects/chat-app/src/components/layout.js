import React, { Component } from 'react'
import io from 'socket.io-client'

const socketURL = "http://10.0.0.188:3231"
export default class layout extends Component {
  constructor() {
      super()

      this.state = {
          socket: null

          
      }
  }

  initSocket = () => {
    const socket = io(socketURL)
    this.setState({socket})
  }

    render() {
        const {title} = this.props
    return (
      <div className="container">
        {title}
      </div>
    )
  }
}
