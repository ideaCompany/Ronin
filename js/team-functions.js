/* Custome Js */
jQuery(document).ready(function() {
    "use strict";
	
	/* Team Slider */
	var owlSlider = jQuery('.o-slider-detail').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        items: 1,
        URLhashListener: true,
        startPosition: 'URLHash',
        dots: false
    });
    jQuery(".o-lecturers-bg").on("click", ".o-lecturers-teacher", function(e) {
        /* Act on the event */
        jQuery(".o-lecturers-teacher").removeClass("active")
        jQuery(this).addClass("active");
    });    
    if (window.location.hash) {
        jQuery(".o-lecturers-teacher").removeClass("active");
        jQuery("a[href*=" + window.location.hash + "]").parent().addClass('active');
    }
		
});