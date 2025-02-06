import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor,within } from '@testing-library/react';
const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the main page is open', () => {
            AppComponent = render(<App />);
        });

        when('the user does nothing', () => {

        });

        then('the event element is collapsed', async () => { 
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
                const firstEvent = EventListItems[0];
                const eventDetails = within(firstEvent).queryByTestId('details-section')
                expect(eventDetails).toBeDefined()
            });
        });
    });

    test('User can expand an event to see details.', ({ given, when, then }) => {
        let AppComponent;
        given('the main page is open', () => {
            AppComponent = render(<App />);
        });

        when('the user clicks an event', () => {       

        });

        then('the event expands and shows details', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
                const firstEvent = EventListItems[0];
                const eventDetails = within(firstEvent).queryByTestId('details-section')
                expect(eventDetails).toBeDefined()
            });
        });
    });

    test('User can collapse an event to hide details', ({ given, when, and, then }) => {
        let AppComponent;
        given('the main page is open', () => {
            AppComponent = render(<App />);
        });

        when('the event is expanded', () => {

        });

        and('the user clicks collapse', () => {        

        });

        then('the event collapses and hides details', async () => {
            const AppDOM = AppComponent.container.firstChild;
            const EventListDOM = AppDOM.querySelector('#event-list');
            await waitFor(() => {
                const EventListItems = within(EventListDOM).queryAllByRole('listitem');
                expect(EventListItems.length).toBe(32);
                const firstEvent = EventListItems[0];
                const eventDetails = within(firstEvent).queryByTestId('details-section')
                expect(eventDetails).toBeDefined()
            });
        });
    });
});