$(function() {
	$('body *').hide(); // Hide site before the intro.

	var loadedImages = [];
	var allLoaded = false;

	$('.intro-img').load(function() {
		if ( $.inArray(this, loadedImages) == -1 ) {
			loadedImages.push(this);
		}
		if (loadedImages.length >= 2 && !allLoaded) {
			allLoaded = true;
			introAnimation();
		}
	}).each(function() {
		if (this.complete) $(this).load();
	});
});

function introAnimation() {
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

	logo.fadeIn(1000).fadeOut(500);
	motto.delay(1500).fadeIn(1000).fadeOut(500);
	enterLink.delay(3000).fadeIn(1000);
	// enterLink.fadeIn(1000);

	enterLink.click(function() {
		$('body *:not(.intro-img)').fadeIn(500).removeAttr('style');
		$.each(faders, function(index, value) {
			value.removeAttr('style');
		});
	});
}