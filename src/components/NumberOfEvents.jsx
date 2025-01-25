import React, { useState } from 'react';

const NumberOfEvents = () => {
    const [numberOfEvents, setNumberOfEvents] = useState(32)
    return (
        <div>
            <label>
                Number of Events:
                <input value={numberOfEvents} onChange={(e) => setNumberOfEvents(Number(e.target.value))}/>
            </label>
        </div>
    );
}


export default NumberOfEvents;

