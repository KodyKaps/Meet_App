import mockData from "../mock-data";
import Event from "../components/Event";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
const normalizeText = (text) => text.replace(/\s+/g, ' ').trim();

const user = userEvent.setup();

describe("Event component", () => {
  test("Scenario 1: An event element is collapsed by default", () => {
    const event = mockData[0];
    render(<Event event={event} />);

    // Verify the title is displayed
    expect(screen.getByTestId("title")).toHaveTextContent(event.summary);

    // Verify the start time is displayed
    expect(screen.getByTestId("start-time")).toHaveTextContent(event.created);

    // Verify the location is displayed
    expect(screen.getByTestId("location")).toHaveTextContent(event.location);

    // Verify the "Show Details" button is rendered
    const showDetailsButton = screen.getByTestId("show-details");
    expect(showDetailsButton).toBeInTheDocument();
    expect(showDetailsButton).toHaveTextContent("Show Details");

    // Verify details are hidden by default
    expect(screen.queryByTestId("about-event")).not.toBeInTheDocument();
    expect(screen.queryByTestId("description")).not.toBeInTheDocument();
  });

  test("Scenario 2: User can expand an event to see details", async () => {
    const event = mockData[0];
    render(<Event event={event} />);

    // Verify the "Show Details" button is rendered
    const showDetailsButton = screen.getByTestId("show-details");
    expect(showDetailsButton).toBeInTheDocument();
    expect(showDetailsButton).toHaveTextContent("Show Details");

    // Simulate user clicking the "Show Details" button
    await user.click(showDetailsButton);

    // Verify the button text changes to "Hide Details"
    expect(showDetailsButton).toHaveTextContent("Hide Details");

    // Verify event details are displayed
    expect(screen.getByTestId("about-event")).toBeInTheDocument();
    expect(screen.getByTestId("description")).toHaveTextContent(normalizeText(event.description));
  });

  test("Scenario 3: User can collapse an event to hide details", async () => {
    const event = mockData[0];
    render(<Event event={event} />);

    // Simulate clicking the "Show Details" button to expand details
    const showDetailsButton = screen.getByTestId("show-details");
    await user.click(showDetailsButton);

    // Verify details are displayed
    expect(screen.queryByTestId("about-event")).toBeInTheDocument();
    
    expect(screen.queryByTestId("description")).toHaveTextContent(normalizeText(event.description));

    // Simulate clicking the "Hide Details" button to collapse details
    await user.click(showDetailsButton);

    // Verify details are hidden
    expect(screen.queryByTestId("about-event")).not.toBeInTheDocument();
    expect(screen.queryByTestId("description")).not.toBeInTheDocument();

    // Verify the button text changes back to "Show Details"
    expect(showDetailsButton).toHaveTextContent("Show Details");
  });
});
