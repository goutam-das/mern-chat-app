import React, { Component } from 'react';
import socketIoClient from 'socket.io-client';

const socketUrl = "http://172.18.0.1:5000";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      socket: null,
      user: null
    }
  }

  componentDidMount() {
    this.initSocket();
  }

  /**
   * Connect to and initialize the soket
   */
  initSocket = () => {
    const socket = socketIoClient(socketUrl);
    console.log(socket);
    socket.on('connect', () => {
      console.log('Connected');
    })
    this.setState({ socket });
  }



  render() {
    return (
      <div>layout
      </div>
    )
  }
}



export default App;