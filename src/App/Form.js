import React, {Component} from 'react';
import './Form.css';

class Form extends Component {
  constructor(props){
    super();
    this.state = {
      nameInput: '',
      dateInput: '',
      timeInput: '',
      numInput: '',
      postRes: props.postRes
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  } 

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    const dateArr = this.state.dateInput.split('-')
    const date = `${dateArr[1]}/${dateArr[2]}`
    const body = {
      name: this.state.nameInput, 
      date: date, 
      time: this.state.timeInput, 
      number: this.state.numInput
    }
    this.state.postRes(body)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="name-input"></label>
        <input className="name-input" name="nameInput" type="text" placeholder="Name" value={this.state.nameInput} onChange={this.handleChange} required></input>

        <label for="date-input"></label>
        <input className="date-input" name="dateInput" type="date" value={this.state.dateInput} onChange={this.handleChange} required></input>

        <label for="time-input"></label>
        <input className="time-input"  name="timeInput" type="time" value={this.state.timeInput}  onChange={this.handleChange} required></input>

        <label for="num-input"></label>
        <input className="num-input"  name="numInput" type="number" placeholder="2" min="1" max="20" value={this.state.numInput} onChange={this.handleChange} required></input>

        <button className="form-button" type="submit">Make Reservation</button>
      </form>
    )
  }
}

export default Form;