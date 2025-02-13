import React from 'react';
import CitySearch from './components/CitySearch';
import EventList from './components/event-list';
import NumberOfEvents from './components/NumberOfEvents';
import { useEffect, useState } from 'react';
import { extractLocations, getEvents } from './api';
import './App.css';
import { InfoAlert, ErrorAlert, WarningAlert } from './components/Alert';
const SEE_ALL_CITIES= "See all cities" 
import EventGenresChart from './components/event-genres-chart';
import CityEventsChart from './components/city-events-chart';

const App = () => {
  const [allLocations, setAllLocations] = useState([]);
  //number of events
  const [currentNOE, setCurrentNOE] = useState(32);
  const [events, setEvents] = useState([]);
  const [currentCity, setCurrentCity] = useState(SEE_ALL_CITIES)
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  useEffect(() => {
    if (navigator.onLine) {
      // set the warning alert message to an empty string ""
      setWarningAlert("")
    } else {
      // set the warning alert message to a non-empty string
      setWarningAlert("Warning the browser navigator is not on line")
    }
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
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length > 0 ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length > 0 ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <CitySearch 
        allLocations={allLocations} 
        setCurrentCity={(city) => setCurrentCity(city)} 
        setInfoAlert={setInfoAlert}
        />
      <NumberOfEvents 
        numberOfEvents={currentNOE} 
        setNumberOfEvents={(n) => setCurrentNOE(n)}
        setErrorAlert={setErrorAlert}  
      />
      <div className='charts-container'>
        <EventGenresChart events={events}/>
        <CityEventsChart allLocations={allLocations} events={events}/>
      </div>
      <EventList events={events}/>
    </div>
  );
}


export default App;