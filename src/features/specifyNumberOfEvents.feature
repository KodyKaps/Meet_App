Feature: Specify Number of Events
    Scenario: When user hasn’t specified a number, 32 events are shown by default.
        Given the app is open
        When user hasn’t changed number of events
        Then thirtytwo should be input value

    Scenario: User can change the number of events displayed.
        Given app is open
        When user changes number of events to five
        Then five should be input value
