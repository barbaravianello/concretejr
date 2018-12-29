debounce = function(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};


(function(){
	var $target = $('.animou'),
			animationClass = 'anime-start',
			offset = $(window).height() * 3/4;

	function animeScroll() {
		var documentTop = $(document).scrollTop();

		$target.each(function(){
			var itemTop = $(this).offset().top;
			if (documentTop > itemTop - offset) {
				$(this).addClass(animationClass);
			} else {
				$(this).removeClass(animationClass);
			}
		});
	}

	animeScroll();

	$(document).scroll(debounce(function(){
		animeScroll();
<<<<<<< HEAD
	}, 30));
=======
<<<<<<< HEAD
	}, 30));
=======
<<<<<<< HEAD
	}, 30));
=======
	}, 100));
>>>>>>> 0e32d3abbdb3f4976f4353cb680786228404e131
>>>>>>> cff28f1bf9b77b6bf542e0bddca387185587702b
>>>>>>> 65139c6997791d6c7edb1f7886f00d6fe543c636
})();

// Portfolio
filterSelection("all")

function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";

  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("filter");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

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

// Responsive Menu

$(document).ready(function () {
  $(".menu-icon").on("click", function () {
    $("#menu ul").toggleClass("showing");
  });
});

// Menu navegação 

$(document).ready(function () {
<<<<<<< HEAD
  $('a[href^="#quem-somos"] , a[href^="#servicos"] , a[href^="#portfolio"] , a[href^="#depoimentos"] , a[href^="#parceiros"]  , a[href^="#contato"]').on('click', function (e) {
=======
<<<<<<< HEAD
  $('a[href^="#quem-somos"] , a[href^="#servicos"] , a[href^="#portfolio"] , a[href^="#depoimentos"] , a[href^="#parceiros"]  , a[href^="#contato"]').on('click', function (e) {
=======
  $('a[href^="#"]').on('click', function (e) {
>>>>>>> cff28f1bf9b77b6bf542e0bddca387185587702b
>>>>>>> 65139c6997791d6c7edb1f7886f00d6fe543c636
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top - 70
    }, 1000, 'swing');
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

// parceiros

$(document).ready(function () {
  $('.customer-logos').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    dots: false,
    pauseOnHover: false,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 4
      }
    }, {
      breakpoint: 520,
      settings: {
        slidesToShow: 3
      }
    }]
  });
});

// modal

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// animação