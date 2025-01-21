import mockData from "../mock-data"
import Event from '../Event'
import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event';
// Feature 2: Show/Hide Event Details
const user = userEvent.setup();
describe('Event component', () => {
    test('Scenario 1: An event element is collapsed by default',() =>{
        const event = mockData[0]
        render(<Event event={event}/>)
        // An element for the event's title: Use the .summary key from the event's object as the text content of that expected element. We recommend using queryByText() instead of queryByRole() (though it’s up to you).
        expect(screen.getByTestId('title')).toHaveTextContent(event.summary)
        // An element for the event's start time: You can use the .created key from the event's object as the text content of this element.
        expect(screen.getByTestId('start-time')).toHaveTextContent(event.created)
        // An element for the event's location: You can use the .location key from the event's object as the text content of this element.
        expect(screen.getByTestId('location')).toHaveTextContent(event.location)
        // The event's show details button (Figure 22).
        expect(screen.getByTestId('show-details')).toBeDefined()
        
        //show details text should be on button
        expect(true).toBe(false);
        //about event should not display
        expect(true).toBe(false);
        //the description should not display
        expect(true).toBe(false);
    })
    test('Scenario 2: User can expand an event to see details',() =>{
        const event = mockData[0]
        render(<Event event={event}/>)

        // An element for the event's title: Use the .summary key from the event's object as the text content of that expected element. We recommend using queryByText() instead of queryByRole() (though it’s up to you).
        expect(screen.getByTestId('title')).toHaveTextContent(event.summary)
        // An element for the event's start time: You can use the .created key from the event's object as the text content of this element.
        expect(screen.getByTestId('start-time')).toHaveTextContent(event.created)
        // An element for the event's location: You can use the .location key from the event's object as the text content of this element.
        expect(screen.getByTestId('location')).toHaveTextContent(event.location)
        // The event's show details button (Figure 22).
        const showHideButton = screen.getByTestId('show-details')
        expect(showHideButton).toBeDefined()

        //user clicks show details
        user.click(showHideButton)

        //
        //show details button should be hide details
        expect(showHideButton).toHaveTextContent('hide details')
        //about event should display
        expect(true).toBe(false);
        //the description should display
        expect(true).toBe(false);
    })
    test('Scenario 3: User can collapse an event to hide details',() =>{
        const event = mockData[0]
        render(<Event event={event}/>)
        //clikc to open

        //assert open
        expect(true).toBe(false);

        //click to close

        //assert closed
        expect(true).toBe(false);
    })
})