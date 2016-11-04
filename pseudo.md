#IPO

Input - User input and clicking
Process - 3 functions
Output - Shopping list item and user response

#Initial set up

-- We need three functions
  - One function will handle the adding a new shopping item
  - Second function will allow us to delete an item from the shopping list
  - Third function will allow us to check a shopping item and cross it out

  HTML with input and button
  one function to listen for the submit event and get the value from the input
  	- it will call the update function (passing it the value)
  	- call the render function and pass it the value
  State object

#Kindergarten steps for function 1

1. When the user clicks the submit button we have to recognize which button the user is clicking
2. Joe need a mechanism to listen to that click event.
3. The we have to do something with that event.
4. We need a way for the shopping list task to be added to the list of items.
5. Including the check and delete items.

#Kindergarten steps for function 2

1. When Joe clicks the delete button we have to recognize which button Joe is clicking
2. Joe need a mechanism to listen to that click event.
3. The we have to do something with that event.
4. In the event, delete the shopping item that was clicked.

#Kindergarten steps for function 3

1. Joe needs visual output that indicates the shopping item he clicked is crossed out.



=======

// app.js

var state = {
	items: [
		{ name: 'apples', checked: true },
		{ name: 'pears', checked: false },
		{ name: 'potatoes', checked: false }
	]
}

function addSomething(state, item) {
	var newState = state.duplicate();
	newState.items.push({ name: item, checked: false });
	return newState;
}

addSomething(state, 'potatoes')

// app.html

<html>
</html>