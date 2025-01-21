// src/App.jsx
import React from 'react';


import EventList from './eventList';
import CitySearch from './CitySearch';
const App = () => {
  return (
    <div className="App">
      <CitySearch/>
      <EventList />
    </div>
  );
}


export default App;