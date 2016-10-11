$(document).ready(function(){
	$(window).scroll(function(){
		var scroll = $(window).scrollTop();
		var alpha = scroll > 125 ? 1: scroll/125;
		$('.navbarhome').css('background-color','rgba(16,27,57,' + alpha + ')');
	})

	$("#portfolio-contant-active").mixItUp();

	function doScroll(event, element, target) {
		event.preventDefault();
		element.blur();
		$('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
		var toggleButton = $('#menu-toggle');
		if(toggleButton.css('display') != 'none') {
			$('#menu-toggle').click();
		}

	}

	$('[href="/#challenges"]').click(function(e){
		doScroll(e, $(this), "#challenges")
	});
	$('[href="/#agenda"]').click(function(e){
		doScroll(e, $(this), "#agenda")
	})
	$('[href="/#special_guests"]').click(function(e){
		doScroll(e, $(this), "#testimonial")
	})
	$('[href="/#mentors"]').click(function(e){
		doScroll(e, $(this), "#mentors")
	})
	$('[href="/#sponsors"]').click(function(e){
		doScroll(e, $(this), "#service")
	})
	$('[href="/#contact"]').click(function(e){
		doScroll(e, $(this), "#register")
	})

	/*$("#testimonial-slider").owlCarousel({
	    paginationSpeed : 500,
	    singleItem:true,
	    autoPlay: 3000,
	});*/


	$("#clients-logo").owlCarousel({
		autoPlay: 3000,
		items : 4,
		itemsDesktop : [1199,5],
		itemsDesktopSmall : [979,5],
	});

	// $("#works-logo").owlCarousel({
	// 	autoPlay: 3000,
	// 	items : 5,
	// 	itemsDesktop : [1199,5],
	// 	itemsDesktopSmall : [979,5],
	// });


	/*// google map
		var map;
		function initMap() {
		  map = new google.maps.Map(document.getElementById('map'), {
		    center: {lat: -34.397, lng: 150.644},
		    zoom: 8
		  });
		}*/

	// Counter

	$('.counter').counterUp({
        delay: 10,
        time: 1000
    });



	/*
 * Replace all SVG images with inline SVG
 */
jQuery('img.svg').each(function(){
    var $img = jQuery(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }

        // Replace image with new SVG
        $img.replaceWith($svg);

    }, 'xml');

});



});
