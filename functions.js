"use strict";

var count = 0;

$(".image-slider").ready(function() {

	// Gets the images in the slider.
	var images = $(".image-container img");

	// Sets up the images in the slider.
	for(var i = 1; i < images.length; i++) {
		var image = images[i];
		$(image).hide();
	}

	// Starts the slideshow.
	var timer = setInterval(showNext, 5000);

	// Pause on hover.
	$(".image-container img").hover(function() { clearInterval(timer); }, function() { timer = setInterval(showNext, 5000); });

	// Previous Arrow
	$(".previous-arrow").click(showPrevious);

	// Next Arrow
	$(".next-arrow").click(showNext);
});

function showPrevious() {
	var images = $(".image-container img");
	$(images[count]).fadeOut(1000, function() {
		if(count > 0) {
			$(images[--count]).fadeIn(1000);
		} else {
			$(images[count = images.length - 1]).fadeIn(1000);
		}
	});
}

function showNext() {
	var images = $(".image-container img");
	$(images[count]).fadeOut(1000, function() {
		if(count < images.length - 1) {
			$(images[++count]).fadeIn(1000);
		} else {
			$(images[count = 0]).fadeIn(1000);
		}
	});
	
}