import React from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/EventList';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';

const SEE_ALL_CITIES= "See all cities" 

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  //number of events
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState(SEE_ALL_CITIES)

  useEffect(() => {
    fetchData();
  }, [currentCity, currentNOE]);

  const fetchData = async () => {
    const allEvents = await getEvents();

    //filter events by city
    //if default show all
    const filteredEvents = currentCity === SEE_ALL_CITIES ? 
    allEvents 
    :
    allEvents.filter(event => event.location === currentCity)

    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  }

  return (
    <div className="App">
      <CitySearch allLocations={allLocations} setCurrentCity={(city) => setCurrentCity(city)} />
      <NumberOfEvents numberOfEvents={currentNOE} setNumberOfEvents={(n) => setCurrentNOE(n)}/>
      <EventList events={events}/>
    </div>
  );
}


export default App;