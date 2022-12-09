# Generic Social Media Site

_Generic social media site that allows users to make a profile, upvote/downvote others' profiles, and that's pretty much it. Maybe we'll come up with a name for it later, like SPRONKR. What a great name!_

## Wireframe

![wireframe diagram](./assets/wireframe.png)
![wireframe diagram for create/edit page](./assets/wireframe_create_edit_page.png)

## here's the plan

0. readme/planning
1. Set up supabase tables
2. Make basic page layout with html/css
3. add test data to tables manually; write fetch/display functions, test
4. write functions/page JS for users to write bio/avatar/name/etc, test

## HTML elements (stuff present upon page load)

### (All pages)

    - nav bar with links to:
        - profiles list page
        - logged in user's profile page
        - edit user profile page
        - logout button
        - add chatroom link

### Profiles list page

    - section for list of profiles, sorted by popularity: constant battle
        - each link to profile should display: username, avatar, popularity

### Profile detail page

    - section for: avatar, username, bio, popularity, upvote/downvote buttons

### Edit profile page

    - form allowing user to edit: username, avatar, bio
    - if user leaves field blank, do not change data

### Create profile page

    - same as profile page, without links to other pages at top

### Chatroom page

    - section for all messages to be rendered to
    - Input form for user message and anything else to send with message, using a button
    - Scrolling window on page to see previous messages
    - sticky form and header bar

## State (everything you need to track internally using JS variables)

### (All pages)

    - object to hold username, avatar of logged in user

### Profile detail page

    - array to hold all profile data locally, to render to page

### Detail page

    - object to hold single profile data locally to render to page

### Chatroom page

    - array to hold 150 most recent messages
    - object to hold currently logged in user data
    - object hold which chatroom user is in

## Events (anything that happens via JS when the user interacts with your site)

### All pages (nav bar)

    - links to: user's profile, edit profile page, logout

### Profile detail page

    - upvote/downvote buttons, on click:
        - increment/decrement user's popularity in DB, update on page

### Create/Edit Profile pages

    - on form submit: update info in DB

### Chatroom page

    - on page load:
        - check if user has profile/logged in
        - retrieve n most recent messages (will find appropriate number to balance performance and usage)
        - broadcast message that current user has joined the chat
        - post current users current status on chatroom login

    - on submit message:
        - send message to database

    - on receive message:
        - update message array
        - append new message to the chat display

## Functions

### Render Functions

    - `renderProfileCard` - for profile list page
    - `renderProfileDetails` - for profile detail page
    - `renderPopularityEl(profile)` - given user profile object, renders upvote/downvote buttons w/event listeners and popularity display
    - `renderNavbarUserData` - rendering logged in user's avatar/username for top nav bar

### Display functions

    - `displayProfileList` - for profile list page
    - `displayProfileDetails` - for profile detail page
    - `displayNavbarUserData` - display logged in user's avatar/username at top nav bar

### Fetch Functions (if applicable)

    - `fetchProfile(id)` - fetch a single profile via id
    - `fetchAllProfiles()` - fetch all profiles
    - `upsertProfile(profile)` - updates/creates profile in supabase: if a field is left blank, do not update that column
    - `incrementPopularity(id)` - using id, increments profile popularity in DB
    - `decrementPopularity(id)` - same as above but decrement instead

### Chatroom functions

    - `fetchRecentMessages` - on chatroom load
    - `sendMessage(message)` - send message to the table, doesn't use realtime
    - `renderMessage(message)` - takes message object as argument
    - `displayNewMessage` - display function that appends rendered messaged to the chat display
    - `displayPreviousMessages` - display function for previous messaged when entering chatroom, appending to chat display
    - `handleMessage(message)` - error checking and message type identification function before displaying to chat

### Other Functions

    - we'll see

## Todos

    - change cursor to look clickable when hovering clickable objects
    - drop shadows absolutely everywhere
    - better fonts for navbar and fonts page
    - layout for create/edit and display page
    - more gradients
    - animations???

## Budget

    - functionality: 1%
    - moderation: 1%
    - css: 98%

## Messaging

    - implement a global realtime chat feature
    - open a new dedicated window or tab
    - when user name is displayed, chat user details will be pulled from user profile
    - usernames can be clickable and redirect to user profile detail page
    - only store last 150 messages locally

### Stretch goals:

    - confetti/celebratory emotes
    - multiple chatrooms for users to select from
