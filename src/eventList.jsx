import React from 'react';
import Event from './Event'

const EventList = ({events}) => {
    return (
        <ul id="event-list">
            {events ? 
            events.map((e,i) => <Event key={e.id} event={e}/>)
            :
            null }
        </ul>
    );
}


export default EventList;

