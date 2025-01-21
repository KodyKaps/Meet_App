// src/components/Event.jsx
import React from 'react';


const Event = ({event}) => {
  const handleClick = () => {

  }
  return (
    <li>
      <h2 data-testid="title">{event.summary}</h2>
      <p data-testid="start-time">{event.created}</p>
      <p data-testid="location">{event.location}</p>
      <button data-testid="show-details" onClick={handleClick}>Show Details</button>
    </li>
  );
}


export default Event;