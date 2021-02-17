import React from 'react';
import './Reservations.css';
import Res from './Res'

const Reservations = ({reservations, cancelRes}) => {
  return (
    <div className="reservations" key={Date.now()}>
      {reservations.map(reservation => <Res res={reservation} cancelRes={cancelRes} key={reservation.id}/>)}
    </div>
  )
}

export default Reservations;