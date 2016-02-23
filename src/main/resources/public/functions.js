function search() {
	$.getJSON(window.location.href + "search", {q: $("#q").val()}, function(json) {
		$.get(window.location.href + '/tweetTemplate.html', function(template) {
			  $("#resultsBlock").empty().append(Mustache.to_html(template, json));
		});
	});	
}