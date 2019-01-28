
$(document).ready(function () {
    $(".menu-icon").on("click", function () {
      $("#menu ul").toggleClass("showing");
    });
  });

jQuery(document).ready(function () {
    // Exibe ou oculta o botão
    jQuery(window).scroll(function () {
<<<<<<< HEAD
      if (jQuery(this).scrollTop() > 100) {
=======
<<<<<<< HEAD
      if (jQuery(this).scrollTop() > 100) {
=======
      if (jQuery(this).scrollTop() > 200) {
>>>>>>> 0e32d3abbdb3f4976f4353cb680786228404e131
>>>>>>> cff28f1bf9b77b6bf542e0bddca387185587702b
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
