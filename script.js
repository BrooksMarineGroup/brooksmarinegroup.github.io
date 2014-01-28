$(function() {
	introAnimation();
});

function introAnimation() {
	$('body *').hide();

	var logo = $('#BMG-logo');
	var motto = $('#BMG-motto');
	var enterLink = $('#BMG-enter');
	
	var windowH = window.height;
	var windowW = window.width;

	faders = [logo, motto, enterLink];

	$.each(faders, function(index, value) {
		value.css('position', 'fixed');
		value.css('left', '50%');
		value.css('top', '50%');
		value.css('margin-left', '-' + value.width()/2 + 'px');
		value.css('margin-top', '-' + value.height()/2 + 'px');
	});

	// motto.css('position', 'fixed');
	// motto.css('left', '50%');
	// motto.css('top', '50%');
	// motto.css('margin-left', '-' + motto.width()/2 + 'px');
	// motto.css('margin-top', '-' + motto.height()/2 + 'px');

	logo.fadeIn(1000).fadeOut(500);
	motto.delay(1500).fadeIn(1000).fadeOut(500);
	enterLink.delay(3000).fadeIn(1000);

	enterLink.click(function() {
		$('body *').show();
		$.each(faders, function(index, value) {
			value.removeAttr('style');
		});
	});
}