# NAME OF APPLICATION

_One or two sentence description of application_

_example:_

Web application that retrieves and sorts a list of cartoon dogs from a remote database

## Wireframe

_Put an image of your wireframe here._

## Make a plan of attack

- list things out in plain English/pseudocode; no need to specify ids, for example

_example:_

1. Write HTML elements, label with IDs
2. Make page layout with CSS
3. Grab HTML elements with `getElementById()`, store in JS variables
4. etc...

## HTML elements (stuff present upon page load)

- doesn't need to be absolutely every html element on the page
  - can just be stuff on page that user will have to interact with and you'll have to grab in `app.js`

_example:_

- Form containing user text input and submit button
- Flexbox div that will contain displayed list of dogs

## State (everything you need to track internally using JS variables)

- counters, user data that's been entered, stuff fetched from external databases, etc
- generally, any JS variables that exist in the global scope in `app.js` go here

_example:_

- `employeeList` - array containing all employee objects

## Events (anything that happens via JS when the user interacts with your site)

- list both triggering event and its resulting effects

_example:_

- Submit button clicked:
  - Pull data from input form
  - Run data through `processData(data)`
  - Put processed data in array `processedData`
  - Render and display processed data on page

## Functions (to plan out how you'll segment things)

- it's not necessary to specify all args! when starting out, you're just trying to figure out how you're going to segment your work
- but! make sure to put your render and display functions here!! that's part of segementing out your program logic!!
    - that also keeps your event listeners clean because it'll be mostly function calls

_example:_

- `calculateTripTime(distance)` - calculates trip time based on total trip distance

### Render Functions

### Display functions

### Fetch Functions (if applicable)

### Other Functions

## Slices

_list of JS functions and features that need to be written in order, usually because each one depends on the previous ones being usable_

**example:**

1. write createObject()
2. write renderObject(), which depends on object existing
3. write displayObject(), which depends on `renderObject()`
4. write processObject(), which depends on object existing
