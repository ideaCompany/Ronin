jQuery(document).ready(function(){ 
	'use strict';

	function recountVal(val){
		switch(val){
			case 1: return '2GB'; break;
			case 2: return '4GB'; break;
			case 3:return '8GB';break;
			case 4:return '16GB+';break;
		}
	}
	
	var pricingSlider = document.getElementById('pricing-slider');
	if(pricingSlider){
		noUiSlider.create(pricingSlider, {
			start: 1,
			connect: 'lower',
			step: 1,
			range: {			  
			  'min':[1,1],
			  '32%':[2,1],
			  '65%':[3,1],
			  'max':[4,1]
			},
			pips: {
				mode: 'steps',
				values: [2,10,20,30],
				density:100
			}
		});
	
		pricingSlider.noUiSlider.on('update', function ( values, handle ) {
			var price_text = '',subscriberCount =0;
			jQuery('#show-price-value2').hide();
			jQuery('#show-price-value1').show();
			switch(Number(values[handle])){						
				case 1: price_text='25';
						subscriberCount = 2000;
						break;
				case 2: price_text='75';
						subscriberCount = 10000;
						break;
				case 3: price_text='150';
						subscriberCount = 20000;
						break;
				case 4: price_text = 'Contact Us';
						jQuery('.premium-restapi-calls').text('(X 30) per month');
						jQuery('#show-price-value2').show();
						jQuery('#show-price-value1').hide();
						break;
			}
	
			if(subscriberCount !=0){
				jQuery('.premium-restapi-calls').text(' '+(subscriberCount*30).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' GB');
			}
			jQuery('#premium-price-text').text(price_text);
	
		});
	
		jQuery('#pricing-slider .noUi-value.noUi-value-horizontal.noUi-value-large').each(function(){
			var val = $(this).html();
			val = recountVal(parseInt(val));
			jQuery(this).html(val);
		});
	}

	function recountVal1(val){
		switch(val){
			case 1: return '4GB'; break;
			case 2: return '8GB'; break;
			case 3:return '16GB';break;
			case 4:return '32GB';break;
			case 5:return '64GB+';break;
		}
	}
	
	var pricingSlider1 = document.getElementById('pricing-slider-1');
	if(pricingSlider1){
		noUiSlider.create(pricingSlider1, {
			start: 1,
			connect: 'lower',
			step: 1,
			range: {
			  'min':[1,1],
			  '23%':[2,1],
			  '48%':[3,1],
			  '73%':[4,1],
			  'max':[5,1],
			},
			pips: {
				mode: 'steps',
				values: [5,10,20,30],
				density:100
			}
		});
	
		pricingSlider1.noUiSlider.on('update', function ( values, handle ) {
			var price_text = '',subscriberCount=0;
			jQuery('#business-show-price-value2').hide();
			jQuery('#business-show-price-value1').show();
			switch(Number(values[handle])){
				case 1: price_text='150';
						subscriberCount = 5000;
						break;
				case 2: price_text='225';
						subscriberCount = 10000;
						break;
				case 3: price_text='450';
						subscriberCount = 20000;
						break;
				case 4: price_text='750';
						subscriberCount = 50000;
						break;
				case 5: price_text = 'Contact Us';
						jQuery('.business-restapi-calls').text('(X 50) per month');
						jQuery('#business-show-price-value2').show();
						jQuery('#business-show-price-value1').hide();
						break;
			}
			if(subscriberCount!=0){
				jQuery('.business-restapi-calls').text(' '+(subscriberCount*50).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+' GB');
			}
			jQuery('#business-price-text').text(price_text);	
		});
	
		jQuery('#pricing-slider-1 .noUi-value.noUi-value-horizontal.noUi-value-large').each(function(){
			var val = $(this).html();
			val = recountVal1(parseInt(val));
			jQuery(this).html(val);
		});
	}
});