jQuery(document).ready(function() {
	
	"use strict";
	
	var dthen1 = new Date("12/30/17 10:40:00 PM");
	var start = "10/05/15 03:02:11 AM";
	var start_date = Date.parse(start);
	var dnow1 = new Date(start_date);
	if (CountStepper > 0)
	var ddiff = new Date((dnow1) - (dthen1));
	else
	var ddiff = new Date((dthen1) - (dnow1));
	var gsecs1 = Math.floor(ddiff.valueOf() / 1000);
	
	var iid1 = "countbox_1";
	CountBack_slider(gsecs1, "countbox_1", 1);
	
	/* IsoTope  */
	
	var grid = jQuery('.grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'fitRows'
	});
	// filter functions
	var filterFns = {
	// show if number is greater than 50
	numberGreaterThan50: function() {
	  var number = jQuery(this).find('.number').text();
	  return parseInt( number, 10 ) > 50;
	},
	// show if name ends with -ium
	ium: function() {
		  var name = jQuery(this).find('.name').text();
		  return name.match( /ium$/ );
		}
	};
	// bind filter button click
	jQuery('.filters-button-group').on( 'click', '.button', function() {
		var filterValue = jQuery( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		grid.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	jQuery('.button-group').each( function( i, buttonGroup ) {
		var buttonGroup = jQuery( buttonGroup );
		buttonGroup.on( 'click', '.button', function() {
		  buttonGroup.find('.is-checked').removeClass('is-checked');
		  jQuery( this ).addClass('is-checked');
		});
	});
	
	var grid2 = jQuery('.featured_grid').isotope({
		itemSelector: '.element-item',
		layoutMode: 'fitRows'
	});
	// filter functions
	var filterFns = {
	// show if number is greater than 50
	numberGreaterThan50: function() {
	  var number = jQuery(this).find('.number').text();
	  return parseInt( number, 10 ) > 50;
	},
	// show if name ends with -ium
	ium: function() {
		  var name = jQuery(this).find('.name').text();
		  return name.match( /ium$/ );
		}
	};
	// bind filter button click
	jQuery('.featured_filters_button_group').on( 'click', '.button', function() {
		var filterValue = jQuery( this ).attr('data-filter');
		// use filterFn if matches value
		filterValue = filterFns[ filterValue ] || filterValue;
		grid2.isotope({ filter: filterValue });
	});
	// change is-checked class on buttons
	jQuery('.featured_button_group').each( function( i, buttonGroup ) {
		var buttonGroup = jQuery( buttonGroup );
		buttonGroup.on( 'click', '.button', function() {
		  buttonGroup.find('.is-checked').removeClass('is-checked');
		  jQuery( this ).addClass('is-checked');
		});
	});
});

