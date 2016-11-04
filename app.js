var state = {
	item:[]
};

var addItem = function(state, item) {
	state.item.push(item);
}

var renderList = function(state, element) {
	var itemsHTML = state.items.map(function(item) {
		return '<li>' + item +'</li>';
	});
	element.html(itemsHTML);
};

$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
	$(this).closest('li').remove();
});

$('shopping-list').on('click', '.shopping-item-toggle')

}