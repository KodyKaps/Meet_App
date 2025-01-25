// src/components/Event.jsx
import React, { useState } from 'react';


const Event = ({event}) => {
  const [hideDetails, setHideDetails] = useState(true)
  const handleClick = () => {
    setHideDetails(!hideDetails)
  }
  return (
    <li>
      <h2 data-testid="title">{event.summary}</h2>
      <p data-testid="start-time">{event.created}</p>
      <p data-testid="location">{event.location}</p>
      {hideDetails == false && 
        <div>
          <p data-testid="about-event">{event.location}</p>
          <p data-testid="description">{event.description}</p>
        </div>
      }
      <button 
        data-testid="show-details" 
        onClick={handleClick}>
          {hideDetails ? 'Show Details' : 'Hide Details'}
      </button>
    </li>

  );
}


export default Event;