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

  componentDidMount = () => {
    return Promise.resolve(fetch('http://localhost:3001/api/v1/reservations'))
      .then(response => {
        console.log('HTTP STATUS', response.status)
        if (!response.ok) {
          this.setState({
            error: 'Sorry, error, please try later!'
          })
          console.error('API ERROR', response)
          throw new Error('Oops')
        }
        return response.json()
      })
      .then(reservations => {
        this.setState({
          reservations: {reservations}.reservations
        })
      })
      .catch(error => {
        this.setState({
          error: 'Sorry, error, please try later!'
        })
        console.error('API ERROR', error)
        throw new Error(error)
      })
    }

  cancelRes = (id) => {
    return Promise.resolve(fetch(`http://localhost:3001/api/v1/reservations/${id}`, {method: 'DELETE'}))
      .then((response) => {
        return response.json()
      })
      .then((reservations) => {
        this.setState({
          reservations: {reservations}.reservations
        })
      })
      .catch(error => {
        this.setState({
          error: 'Sorry, error, please try later!'
        })
        console.error('API ERROR', error)
        throw new Error(error)
      })
  }

  postRes = (body) => {
    const settings = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: body.name, 
        date: body.date, 
        time: body.time, 
        number: body.number
      })
    }
    return Promise.resolve(fetch('http://localhost:3001/api/v1/reservations', settings))
    .then((response) => {
      return response.json()
    })
    .then(reservation => {
      console.log('hi', [...this.state.reservations, reservation])
      this.setState({
        reservations: [...this.state.reservations, reservation]
      })
    })
    .catch(error => {
      this.setState({
        error: 'Sorry, error making reservation, please try later!'
      })
      console.error('API ERROR', error)
      throw new Error(error)
    })
  }

  render = () => {
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
          <Form postRes={this.postRes}/>
          <Reservations reservations={this.state.reservations} cancelRes={this.cancelRes}/>
        </>
        }
      
      </div>
    )
  }
}

export default App;