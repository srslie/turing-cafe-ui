import React from 'react';
import './Res.css';

const Res = ({res, cancelRes}) => {

  const cancel = (event) => {
    event.preventDefault()
    const targetId = event.target.closest('.res').id
    cancelRes(targetId)
  }

  return (
    <div className="res" id={res.id} key={res.id} >
      <h2 className="name">{res.name}</h2>
      <p className="date">{res.date}</p>
      <p className="time">{res.time} pm</p>
      <p className="num">Number of Guests:{res.number}</p>
      <button className="cancel-button" type="button" onClick={cancel}>Cancel</button>
    </div>
  )
}

export default Res;