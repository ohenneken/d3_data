window.addEvent('domready', function() {
	new Request.HTML({
		url: '/gh/get/response.html/ohenneken/d3_data/tree/master/d3_data/',
		data: {'delay': 1},
		method: 'post',
		update: 'demo',
		onSuccess: function(response) {
			$('demo').highlight();
		}
	}).send();
})
