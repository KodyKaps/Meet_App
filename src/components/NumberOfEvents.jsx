import React, { useState } from 'react';

const NumberOfEvents = () => {
    const [numberOfEvents, setNumberOfEvents] = useState(32)
    return (
        <div>
            <label>
                Number of Events:
                <input type="number" value={numberOfEvents} onChange={e => setNumberOfEvents(e.target.value)}/>
            </label>
        </div>
    );
}


export default NumberOfEvents;

