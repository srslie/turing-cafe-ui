import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super();
    this.state = {
      nameInput: null,
      dateInput: null,
      timeInput: null,
      numInput: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  } 

  handleChange(property, event) {
  //   console.log('VALUE', event.target.value)
  //   // this.setState({[property]: event.target.value})
  }

  handleSubmit(event) {
    alert('Thank you for your reservation!')
    event.preventDefault()
    console.log('STATESUBMIT', this.state)
    const body = {
      name: this.state.nameInput, 
      date: this.state.dateInput, 
      time: this.state.timeInput, 
      number: this.state.numInput
    }
    this.props.postRes(body)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name-input"></label>
        <input className="name-input" type="text" placeholder="Name" value={this.state.nameInput} onChange={this.handleChange('nameInput')} required></input>

        <label for="date-input"></label>
        <input className="date-input" type="date" value={this.state.dateInput} onChange={this.handleChange('dateInput')} required></input>

        <label for="time-input"></label>
        <input className="time-input" type="time" value={this.state.timeInput}  onChange={this.handleChange('timeInput')} required></input>

        <label for="num-input"></label>
        <input className="num-input" type="number" placeholder="2" min="1" max="20" value={this.state.numInput} onChange={this.handleChange('numInput')} required></input>

        <button className="form-button" type="submit">Make Reservation</button>
      </form>
    )
  }
}

export default Form;