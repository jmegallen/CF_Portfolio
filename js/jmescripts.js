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
		var myComment = $('#message-box').val();
		$('#visible-comment').html('Thanks for the interest..    ' + myComment);
		$('#visible-comment').css('display', 'block');
		$('#char_count').css('display', 'none');
		$('#message-box').hide("slow");
		console.log(myComment);
		return false;
	});
	//Message Box Count
	var text_max = 200;
	$('#char_count').html('Remaining ' + text_max);
	$('#message-box').keyup(function() {
  var text_length = $('#message-box').val().length;
  var text_remaining = text_max - text_length;
  $('#char_count').html('Remaining ' + text_remaining);
	});
	if(text_length > 50) {
  $("#message-box").css("color", "blue");
	} 
	else {
	$("#message-box").css("color", "red");
	};
  
}); 