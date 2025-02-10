import React from 'react';

const NumberOfEvents = ({numberOfEvents, setNumberOfEvents, setErrorAlert}) => {
    const handleInputChanged = (event) => {

        //validate it is a number, length, not characters else set an error
        let errorText;
        let rawInput = event.target.value
        if (!Number.isInteger(rawInput) ||  Number.isNaN(rawInput) || Number(rawInput) <= 0) {
            console.warn("invalid input")
            errorText = "That input is invalid please enter a number"
        } else {
            errorText = ""
        }
        setErrorAlert(errorText);

        setNumberOfEvents(Number(rawInput))
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

