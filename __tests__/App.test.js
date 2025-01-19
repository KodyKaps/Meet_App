/* eslint-disable no-undef */
import {render, screen} from '@testing-library/react';

import App from '../src/App'

describe('App component', () => {
    test('renders component', () =>{
        const appDOM = render(<App/>)
        const h1 = screen.queryByText('Meet App')
        console.log(h1)
        expect(h1).toHaveTextContent('Meet App')
    })
    test('renders list of events', () =>{
        //pass events list as props to app
        const events = []
        const appDOM = render(<App/>)
        // console.log(appDOM.)
        //expect the list to have 10 items in it
        expect(true).toBe(false)
    })
})