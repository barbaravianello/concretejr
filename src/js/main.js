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


// topo fixed and Back to top button

jQuery(document).ready(function () {
  // Exibe ou oculta o botão
  jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 200) {
      jQuery('.back-to-top').fadeIn(200);
    } else {
      jQuery('.back-to-top').fadeOut(200);
    }
  });

  // Faz animação para subir
  jQuery('.back-to-top').click(function (event) {
    event.preventDefault();
    jQuery('html, body').animate({
      scrollTop: 0
    }, 1000);
  })
});