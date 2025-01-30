import React from 'react';

const NumberOfEvents = ({numberOfEvents, setNumberOfEvents}) => {
    const handleInputChanged = (event) => {
        setNumberOfEvents(Number(event.target.value))
    }
    return (
        <div>
            <label>
                Number of Events:
                <input id="number-of-events" value={numberOfEvents} onChange={handleInputChanged}/>
            </label>
        </div>
    );
}


export default NumberOfEvents;

