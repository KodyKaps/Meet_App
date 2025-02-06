Feature: Show Hide An Events Details
    Scenario: An event element is collapsed by default.
        Given the main page is open
        When the user does nothing
        Then the event element is collapsed

    Scenario: User can expand an event to see details.
        Given the main page is open
        When the user clicks an event
        Then the event expands and shows details
        
    Scenario: User can collapse an event to hide details
        Given the main page is open
        When the event is expanded
        And the user clicks collapse
        Then the event collapses and hides details