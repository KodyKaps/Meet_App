// src/__tests__/App.test.js
import { render,waitFor, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import { getEvents } from '../api';

describe('<App /> component', () => {
  let AppDOM;
  beforeEach(() => {
    AppDOM = render(<App />).container.firstChild;
  })


  test('renders list of events', () => {
    expect(AppDOM.querySelector('#event-list')).toBeInTheDocument();
  });


  test('render CitySearch', () => {
    expect(AppDOM.querySelector('#city-search')).toBeInTheDocument();
  });
});

describe('<App/> integration', () => {
  test('renders a list of events matching the city selected by the user', async () => {
    //Arrange
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
 
 
    const CitySearchDOM = AppDOM.querySelector('#city-search');
    const CitySearchInput = within(CitySearchDOM).queryByRole('textbox');
 
    //Act (Action)
    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem = within(CitySearchDOM).queryByText('Berlin, Germany');
    await user.click(berlinSuggestionItem);
 
 
    const EventListDOM = AppDOM.querySelector('#event-list');
    //give me all event items
    const allRenderedEventItems = within(EventListDOM).queryAllByRole('listitem');  
 
    //go get the events for berlin from mock data
    //expected events
    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      event => event.location === 'Berlin, Germany'
    );
 
    //Assert
    //expect(actual).toBe(expected)
    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
  });

  test('user changes value of number of events', async () => {
    //Arrange
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    let NumberOfEventsInput = AppDOM.querySelector('#number-of-events');
    //should start at 32
    expect(NumberOfEventsInput.value).toBe("32")
    //type back back 5
    
    await user.type(NumberOfEventsInput, "{backspace}{backspace}5")
    expect(NumberOfEventsInput.value).toBe("5")
    //should be 5
    
    //give me all event items
   
  })
});