# Feature: Filter Events By City
  ## **Scenario**: When user hasn’t searched for a city, show upcoming events from all cities

    - Given the user has not entered a city in the search input
    - When the user views the events list
    - Then the list should display upcoming events from all cities

  ## **Scenario**: User should see a list of suggestions when they search for a city
    - Given the user starts typing a city name in the search input
    - When the input matches available cities
    - Then a list of city suggestions should be displayed

  ## **Scenario**: User can select a city from the suggested list
    - Given the user sees a list of city suggestions
    - When the user clicks on a city in the list
    - Then the events list should update to show events from the selected city

# Feature: Show/Hide Event Details
  ## **Scenario**: An event element is collapsed by default
    - Given the events list is displayed
    - When default page load
    - Then each event element should be collapsed by default

  ## **Scenario**: User can expand an event to see details
    - Given the user sees a collapsed event element
    - When the user clicks on the "expand" button or element
    - Then the event details should be displayed

  ## **Scenario**: User can collapse an event to hide details
    - Given the user sees an expanded event element
    - When the user clicks on the "collapse" button or element
    - Then the event details should be hidden

# Feature: Specify Number of Events
  ## **Scenario**: When user hasn’t specified a number, 32 events are shown by default
    - Given the user has not entered a number of events to display
    - When the events list is displayed
    - Then up to 32 events should be shown

  ## **Scenario**: User can change the number of events displayed
    - Given the user sees the default number of events
    - When the user changes the number of events in the settings
    - Then the events list should update to display the specified number of events

# Feature: Use the App When Offline
  ## **Scenario**: Show cached data when there’s no internet connection
    - Given the user is offline
    - When the user views the events list
    - Then the list should display cached event data

  ## **Scenario**: Show error when user changes search settings (city, number of events)
    - Given the user is offline
    - When the user tries to change the city or number of events
    - Then an error message should be displayed

# Feature: Add an App Shortcut to the Home Screen
  ## **Scenario**: User can install the meet app as a shortcut on their device home screen
    - Given the user is using a device that supports app shortcuts
    - When the user chooses to add the app to their home screen
    - Then the app should be installed as a shortcut on the home screen

# Feature: Display Charts Visualizing Event Details
  ## **Scenario**: Show a chart with the number of upcoming events in each city
    - Given the user is viewing the events list
    - When the user navigates to the charts section
    - Then a chart should be displayed showing the number of upcoming events in each city
