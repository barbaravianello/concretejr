// Responsive Menu

$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("#menu ul").toggleClass("showing");
    });
});

// Scrolling Effect

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $('#menu').addClass('blue');
    } else {
        $('#menu').removeClass('blue');
    }
});

// Portfolio

function scaleDown() {

    $('.work > figure').removeClass('current').addClass('not-current');
    $('.filter > ul > li').removeClass('current-li');

}

function show(category) {

    scaleDown();

    $('#' + category).addClass('current-li');
    $('.' + category).removeClass('not-current');
    $('.' + category).addClass('current');

    if (category == "all") {
        $('.filter > ul > li').removeClass('current-li');
        $('#all').addClass('current-li');
        $('.work > figure').removeClass('current, not-current');
    }

}

$(document).ready(function () {

    $('#all').addClass('current-li');

    $(".filter > ul > li").click(function () {
        show(this.id);
    });

});

// navegation 

jQuery(document).ready(function ($) {

    // topo fixed and Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
        $('#topo').addClass('topo-fixed');
      } else {
        $('.back-to-top').fadeOut('slow');
        $('#topo').removeClass('topo-fixed');
      }
    });
    $('.back-to-top').click(function () {
      $('html, body').animate({
        scrollTop: 0
      }, 1500, 'easeInOutExpo');
      return false;
    });
  
    // Initiate superfish on nav menu
    $('.nav-menu').superfish({
      animation: {
        opacity: 'show'
      },
      speed: 400
    });
});


// navegação menu

$('a[href*="#"]:not([href="#"])').on('click', function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
  
      var target = $(this.hash);
      if (target.length) {
        var top_space = 0;
  
        if( $('#topo').length ) {
          top_space = $('#topo').outerHeight();
  
          if( ! $('#topo').hasClass('header-fixed') ) {
            top_space = top_space - 20;
          }
        }
  
        $('html, body').animate({
          scrollTop: target.offset().top - top_space
        }, 1500, 'easeInOutExpo');
  
        if ( $(this).parents('.nav-menu').length ) {
          $('.nav-menu .menu-active').removeClass('menu-active');
          $(this).closest('li').addClass('menu-active');
        }
  
        if ( $('body').hasClass('mobile-nav-active') ) {
          $('body').removeClass('mobile-nav-active');
          $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
          $('#mobile-body-overly').fadeOut();
        }
        return false;
      }
    }
  });