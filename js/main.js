$(document).ready( function() {
    'use strict';

    // ===== mobile responsive nav background change js start here =====
    var navBg = $('.nav-bg');
    if ( matchMedia('(max-width: 767px)').matches ) {
        navBg.removeClass('bg-transparent')
            .addClass('bg-primary');
    } else {
        $(window).scroll(function () {
            //if you hard code, then use console
            //.log to determine when you want the
            //nav bar to stick.
            // console.log($(window).scrollTop());
            if ($(window).scrollTop() > 115) {
                navBg.addClass('bg-dark')
                     .removeClass('bg-transparent');
            }
            if ($(window).scrollTop() < 116) {
                navBg.addClass('bg-transparent')
                     .removeClass('bg-dark');
            }

        });
    }

    /*------------------------------------------------------------------
     Animation Numbers
     ------------------------------------------------------------------*/
    $('.animateNumber').each(function() {
        var num = $(this).attr('data-num');

        var top = $(document).scrollTop() + ($(window).height());
        var pos_top = $(this).offset().top;
        if (top > pos_top && !$(this).hasClass('active')) {
            $(this).addClass('active').animateNumber({
                number: num
            }, 2000);
        }
    });

    // ================ burger menu js for startup one start here ==================
    var hamCross = $( ".cross" ),
        hamMenu = $( ".menu" ),
        hamBurger = $( ".hamburger" );
    hamCross.hide();
    hamMenu.hide();
    hamBurger.on('click', function() {
        hamMenu.slideToggle( "slow", function() {
            hamBurger.hide();
            hamCross.show();
        });
    });
    hamCross.on('click', function() {
        hamMenu.slideToggle( "slow", function() {
            hamCross.hide();
            hamBurger.show();
        });
    });
    // ============= burger menu js for startup one end here ===============

    // ================ burgermenu js start ===================
    $('.menuBtn').on('click', function (e) {
        e.preventDefault();
        $('#swipeNav').removeClass('animated slideOutRight').addClass('animated slideInRight');
    });
    $('.menu-cross-btn').on('click', function (e) {
        e.preventDefault();
        $('#swipeNav').removeClass('animated slideInRight').addClass('animated slideOutRight');
    });
    // ================ burgermenu js end =====================





    /* ================================ preloder js start here ======================================== */
    // site preloader -- also uncomment the div in the header and the css style for #preloader
    $(window).on('load', function(){
        $('#preloader').fadeOut('slow',function(){$(this).remove();});
    });
    /* ================================ preloder js end here ======================================== */


});