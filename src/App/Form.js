import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(){
    super();
    this.state = {
      nameInput: null,
      dateInput: null,
      timeInput: null,
      numInput: null
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  } 

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    alert('Thank you for your reservation!')
    event.preventDefault()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name-input"></label>
        <input className="name-input" type="text" placeholder="Name" value={this.state.nameInput} onChange={this.handleChange} required></input>

        <label for="date-input"></label>
        <input className="date-input" type="date" value={this.state.dateInput} onChange={this.handleChange} required></input>

        <label for="time-input"></label>
        <input className="time-input" type="time" value={this.state.timeInput}  onChange={this.handleChange} required></input>

        <label for="num-input"></label>
        <input className="num-input" type="number" placeholder="2" min="1" max="20" value={this.state.numInput} onChange={this.handleChange} required></input>

        <button type="submit">Make Reservation</button>
      </form>
    )
  }
}

export default Form;