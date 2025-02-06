import { loadFeature, defineFeature } from 'jest-cucumber';
import App from '../App';
import { render, waitFor,within } from '@testing-library/react';
const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
    test('When user hasn’t specified a number, 32 events are shown by default.', ({ given, when, then }) => {
        let AppComponent;
        given('the app is open', () => {
            AppComponent = render(<App />);
            
        });

        when('user hasn’t changed number of events', () => {

        });

        then('thirtytwo should be input value', () => {

        });
    });

    test('User can change the number of events displayed.', ({ given, when, then }) => {
        let AppComponent;
        given('app is open', () => {
            AppComponent = render(<App />);

         });

        when('user changes number of events to five', () => {

        });

        then('five should be input value', () => {

        });
    });
})