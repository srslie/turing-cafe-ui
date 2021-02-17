import React from 'react';
import './Reservations.css';
import Res from './Res'

const Reservations = ({reservations, cancelRes}) => {
  return (
    <div className="reservations">
      {reservations.map(reservation => <Res res={reservation} cancelRes={cancelRes}/>)}
    </div>
  )
}

export default Reservations;