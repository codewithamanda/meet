Meet App

Key Features 
1. Filter events by city. 
2. Show/hide event details. 
3. Specify number of events. 
4. Use the app when offline. 
5. Add an app shortcut to the home screen. 
6. View a chart showing the number of upcoming events by city.

**FEATURE 1: FILTER EVENTS BY CITY**

As a user, I should be able to filter events by city so that I can see the list of events that take place in that city.

* Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

**Given** user hasn’t searched for any city

**When** the user opens the app

**Then** the user should see a list of all upcoming events

* Scenario 2: User should see a list of suggestions when they search for a city.

**Given** the main page is open

**When** user starts typing in the city textbox

**Then** the user should see a list of cities (suggestions) that match what they’ve typed

* Scenario 3: User can select a city from the suggested list.

**Given** the user was typing “Berlin” in the city textbox
And the list of suggested cities is showing

**When** the user selects a city (e.g., “Berlin, Germany”) from the list

**Then** their city should be changed to that city (i.e., “Berlin, Germany”)
And the user should receive a list of upcoming events in that city

**FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS**

As a user, I should be able to show/hide an events details so that I can choose what events I want to be shown, and hide those that I’m not interested in.

* Scenario 1: An event element is collapsed by default

**Given** the user is on the main page

**When** the event element is collapsed by default

**Then** the user should see an option to expand it for more details

* Scenario 2: User can expand an event to see its details

**Given** the user is on the main page

**When** the user clicks an event element

**Then** the user will see the event details as the event element expands

* Scenario 3: User can collapse an event to hide its details

**Given** the user no longer needs to see the expanded event element

**When** the user clicks on the event element

**Then** the event element will collapse, hiding the details

**FEATURE 3: SPECIFY NUMBER OF EVENTS**

As a user, I should be able to specify the number of events so that I can see only the number of items I specify.

* Scenario 1: When user hasn’t specified a number, 32 is the default number

**Given** the user is on the main page

**When** the user sees the default event element layout

**Then** the user notices there are 32 event elements displayed

* Scenario 2: User can change the number of events they want to see

**Given** the user is on the main page

**When** the user can choose how many event elements they want to see on the main page

**Then** the user will be shown their specified number of event elements

**FEATURE 4: USE THE APP WHEN OFFLINE**

As a user, I should be able to access the app offline so that I can see where I left off, even if I don’t have an internet connection.

* Scenario 1: Show cached data when there’s no internet connection

**Given** the user has no internet connection

**When** the user wants to use the app

**Then** the user will be able to view event elements that they have previously viewed

* Scenario 2: Show error when user changes the settings (city, time range)

**Given** the user has no internet connection

**When** the user changes the settings

**Then** the user will be shown an error message, as the new data wouldn’t be able to be pulled from previous user sessions on the app

**FEATURE 5: DATA VISUALIZATION**

As a user, I should be able to see a chart showing the number of upcoming events by city so that I can see a visual rendering of where the most events are happening.

* Scenario 1: Show a chart with the number of upcoming events in each city

**Given** the user is looking for events in a specific city

**When** the user sees a chart displayed

**Then** the user will be able to gather information from the chart about how many events are upcoming in that city
