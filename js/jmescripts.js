//TwitterButtonJS
! function(d, s, id) {
	var js, fjs = d.getElementsByTagName(s)[0],
		p = /^http:/.test(d.location) ? 'http' : 'https';
	if (!d.getElementById(id)) {
		js = d.createElement(s);
		js.id = id;
		js.src = p + '://platform.twitter.com/widgets.js';
		fjs.parentNode.insertBefore(js, fjs);
	}
}(document, 'script', 'twitter-wjs');
//AfterDOM
$(document).ready(function() {
	// Tooltips
	$(function() {
		$('[data-toggle="tooltip"]').tooltip();
	});
	$(function() {
		$('#droptoolbut').tooltip();
	});
	// Stellar
	$('#video').stellar();
	// Smooth scrolling
	var $root = $('html, body');
	$('.navbar-nav a').click(function() {
		var href = $.attr(this, 'href');
		$root.animate({
			scrollTop: $(href).offset().top
		}, 500, function() {
			window.location.hash = href;
		});
		return false;
	});
	//Event Listen
	$('#subbut').on('click', function() {
		// now we're going to work in here
		var comment = $('#message-box').val();
		$('#visible-comment').html(comment);
		$('#message-box').hide("slow");
		console.log(comment);
		return false;
	});
}); 