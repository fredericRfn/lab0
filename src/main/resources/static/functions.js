$(document).ready(function() {
	registerSearch();
});


function registerSearch() {
	$("#search").submit(function(ev){
		event.preventDefault();
		$.getJSON(window.location.href + "search", {q: $("#q").val()}, function(dat) {
			var json = JSON.stringify(dat);
			console.log(json);
			$.get(window.location.href + '/tweetTemplate.html', function(data) {
				  var template = data;
				  console.log(data);
				  var html = Mustache.to_html(template, dat);
				  $("#resultsBlock").empty().append(html);
			});
		});	
	});
}

