// src/App.jsx
import React, { useEffect, useState } from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/eventList';
import NumberOfEvents from './components/NumberOfEvents';
import { getEvents } from './api';
import './App.css';


const [events, setEvents] = useState([]);
const [currentNOE, setCurrentNOE] = useState(32);

return (
  <div className="App">
    <CitySearch />
    <NumberOfEvents />
    <EventList events={events} />
  </div>
);

const fetchData = async () => {
  const allEvents = await getEvents();
  setEvents(allEvents.slice(0, currentNOE));
}

useEffect(() => {
  fetchData();
}, []);



export default App;