# Data layer

## Data

- UserContext
  - User profile:
    - name: string
    - id: string
    - token: string
    - isLogged: boolean
- UIContext
  - isLoading: boolean
  - modal
    - isError: boolean
    - isOpen: boolean
    - text: string
- VenuesContext
  - Venue info:
    - name: string
    - city: string
    - adress: string
    - capacity: number
    - indoor: boolean
    - proneNumber: string
    - email: string
    - pictures: string

## Receive interactions

- UserContext
  - registerUser: Add new user to database
  - loginUser: set isLogged to true
  - logoutUser: set isLogged to false
- UiContext
  - isLoading
    - set to true
    - set to false
  - openModal
    - set to true
    - isError
    - text
  - closeModal
    - set to false
- VenuesContext
  - createVenue: Add new venue to database
  - updateVenue: Update venue information in database
  - deleteVenue: Delete venue from database

# Components

## APP

### Show data

- Header component
- VenuesCardList component
- MobileMenu in mobile layout
- NotFoundPage when user tries to navigate to unknown path
- Loading component while loading pages
- Modal component to show feedback and error messages

## Header

### Show data

- Small app logo in mobile layout
- Large app logo in desktop layout
- SearchBar component in desktop layout
- Hamburger component in desktop layout

## MobileMenu

### Show data

- “magnifying glass” svg icon button
- “home” svg icon button
- “profile” svg icon button

### Receive information

- Open SerchBar component on click
- Navigate to HomePage on click
- Show “register” and “login” links on click, when user is not logged
  - Open the received component on click
- Show “my venues” and “logout” links on click, when user is logget
  - Navigate to “my venues” on click
  - Logout user on click

## RegisterForm

### Show data

- Form component with inputs:
  - Username
  - Password
  - Email
  - Picture
- Button component with “Register” text
- Link to loginPage

### Receive interactions

- Submit form on click
- Navigate to loginPage on click

## LoginForm

### Show data

- Form component with inputs:
  - Username
  - Password
- Button component with “login” text
- Link to RegisterPage

### Receive interactions

- Submit form on click
- Navigate ro RegisterPage on click

## Button

### Show data

- The received text

### Receive interactions

- The received action on click

## NotFoundPage

### Show data

- SVG icon with the app logo
- Heading level 1 with text “404 not found”
- Button component with text “home”

### Receive interactions

- Navigate to HomePage on click

## Modal

### Show data

- Text with success or error feedback
- “X” svg icon button

### Receive interactions

- Close modal on click

## VenueCard

### Show data

- Heading level 2 with the received name of the venue
- The received venue image
- A span with a “location” icon and the received venue city
- A span with a “crowd” icon and the received venue capaticy
- A “detail” svg icon button

### Receive interactions

- Navigate to the venue detailed card on click

## VenuesCardList

### Show data

- A VenueCard for each received result
- A button component with text “previous”
- A button component with text “next”

### Receive interactions

- Load next page of results on click
- Load previous page of results on click

## VenueDetailedCard

### Show data

- The received venue image
- Heading level 1 with the received name of the venue
- A span with a “location” icon and the received venue city
- A span with a “crowd” icon and the received venue capaticy
- A span with a “phone” icon and the received venue phone number
- A span with a “mail” icon and the received venue email adress
- Heading level 2 with the text “description”
- A paragraph with the received venue description
- A “edit” svg icon button when the user is logged in

### Receive interactions

- Navigate to EditForm on click

## EditVenueForm

### Show data

- Heading level 1 with text “Edit venue”
- A form element with:
  - Text input with label “name”
  - Text input with label “city”
  - Text input with label “adress”
  - Number input with label “total capacity”
  - Select input with label “indoor/outdoor”
  - Text input with label “phone number”
  - Email input with label “email”
  - File input with label “pictures”
  - Textarea input with label “description”
- Button component with text “edit”

### Receive interactions

- Submit form on click

## CreateVenueForm

### Show data

- Heading level 1 with text “Create venue”
- A form element with:
  - Text input with label “name”
  - Text input with label “city”
  - Text input with label “adress”
  - Number input with label “total capacity”
  - Select input with label “indoor/outdoor”
  - Text input with label “phone number”
  - Email input with label “email”
  - File input with label “pictures”
  - Textarea input with label “description”
- Button component with text “create”

## SearchBar

### Show data

- Text input with label “search”
- A “magnifying glass” svg icon button in desktop layout
- Button component with text “search” in mobile layout

### Receive interactions

- Load the search results on submit
