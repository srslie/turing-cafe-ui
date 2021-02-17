import React, { Component } from 'react';
import './App.css';
import Form from './Form'
import Reservations from './Reservations'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: null,
      error: ''
    }
  }
  
  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form />
        <Reservations />
      </div>
    )
  }
}

export default App;


