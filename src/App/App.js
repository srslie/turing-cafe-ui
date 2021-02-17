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
        {!this.state.reservations && !this.state.error &&
          <p>Loading...</p>
        }
        {this.state.error &&
          <p>{this.state.error}</p>
        }
        
        {this.state.reservations &&
        <>
          <Form />
          <Reservations reservations={this.state.reservations}/>
        </>
        }

      
      </div>
    )
  }
}

export default App;


