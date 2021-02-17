## Turing Cafe - Reservation Portal

A React App that displays the current reservations for the Turing Cafe!

I had 3 hours to build this application. This is the midMod for Mod 3. 

![turing-cafe-screenshot](https://user-images.githubusercontent.com/20754511/57332366-dbd59d00-70d7-11e9-9de6-967d7aca98a4.png)
### Iteration 1

Get all existing reservations on page load and display them on the DOM.

### Iteration 2

Create a controlled form component to create a reservation (look into the API documentation to see what pieces of information are expected, and what datatypes it wants each piece to be). As a user types into the input fields, the form component's state should change.  When the user clicks the `Make Reservation` button, the application should update the App's state.  The new reservation should display with all of the existing reservations. 

Do not worry about making the POST request to the database yet.

### Iteration 3

Now that the functionality is there for adding a reservation, write some tests:
* Write tests covering what should be displayed on the page when the user first visits.
* Write a test that checks that when data is put into the form, the value is reflected in that form input.
* Write a test to check the user flow of adding a new reservation to the page.

### Iteration 4 (extension)

When the user makes a reservation, the application should make a post request to the API. The new reservation should still exist upon reloading the page.

**Keep any fetch calls you write in the App component for now**

(If you have time to refactor your fetch calls into a separate helper file, that is fine, but it is *NOT* a requirement for this application.)

### Iteration 5 (extension)

Delete a reservation when the user clicks the `Cancel` button.  The deletion should persist upon reloading the page.

### Other Extensions

* Add error handling for the form and network requests. Try writing out a few other tests to cover sad path testing.

* Add a new endpoint to the API server so the front-end can request all of the cafe's menu items. In the front end, add a button to view the menu.

* Add a button or drop down so that the user has the option to sort their reservations by date from earliest to latest or latest to earliest.
