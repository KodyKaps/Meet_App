import { render, screen } from "@testing-library/react";
import NumberOfEvents from '../components/NumberOfEvents'
describe('NumberOfEvents', () => {
  test('the default value of the input field is 32', () => {
    render(<NumberOfEvents numberOfEvents={32}/>)
    const input = screen.queryByRole('textbox')
    screen.debug()
    expect(input.value).toBe('32')
  });

  test('the NumberOfEvents component contains an element with the role of the textbox', () => {
    render(<NumberOfEvents numberOfEvents={32}/>)
    const input = screen.queryByRole('textbox')
    screen.debug()
    expect(input.value).toBe('32')
  });

  // the value of the NumberOfEvents component’s textbox has a value that changes accordingly when a user .type()s in it. (Note: If you want to simulate pressing backspace twice and then typing 10, you would write the code await user.type(TextInput_Reference_Variable, '{backspace}{backspace}10');).
  test('the NumberOfEvents component value changes when user types', () => {
    
  });
});


