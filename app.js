$(function() {
//state
	var state = {
	items:[]
	
	};




var addItem = function(state, item) {
		state.items.push({name: item, checked:false});
	};

var deleteItem = function(state, item) {
		state.items.shift();
	};

//event listeners
	var jsPage = $('body');

	jsPage.on('click', '#js-shopping-list-form > button', function(event) {
		event.preventDefault();
		var userInput = $('#shopping-list-entry').val();
		if (userInput === '') {
			alert('please enter item');
		} else {
			addItem(state, userInput);
			renderList(state, $(".shopping-list"));
		}
		
	});

	jsPage.on('click', '.shopping-item-delete', function(event) {
		$(this).closest('li').remove();
		deleteItem(state, event);
		
	});

	$('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
		$('.shopping-item').toggleClass('shopping-item-checked');
		
	});



	


//--html rendering
	var renderList = function(state, element) {
		var itemsHTML = state.items.map(function(item) {
			return  '' + 
			'<li>' +
        		'<span class="shopping-item">' + item.name + '</span>' +
        	'<div class="shopping-item-controls">' +
          		'<button class="shopping-item-toggle">' +
            		'<span class="button-label">check</span>' +
          		'</button>' +
          		'<button class="shopping-item-delete">' +
            		'<span class="button-label">delete</span>' +
          		'</button>' +
        	'</div>' +
      		'</li>';
		});
	
	element.html(itemsHTML);
	};
   console.log(state);

});
