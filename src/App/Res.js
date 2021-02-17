import React from 'react';
import './Res.css';

const Res = ({res, cancelRes}) => {

  const cancel = (event) => {
    event.preventDefault()
    console.log(event.currentTarget)
    cancelRes(event.currentTarget)
  }

  return (
    <div className="res" id={Date.now} >
      <h2 className="name">{res.name}</h2>
      <p className="date">{res.date}</p>
      <p className="time">{res.time}</p>
      <p className="num">{res.num}</p>
      <button type="button" onClick={this.cancelRes}>Cancel</button>
    </div>
  )
}

export default Res;