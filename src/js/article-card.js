import 'bootstrap';
import '../css/aboutUs.scss';
import '../css/style.scss';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';
import 'slick-carousel';
import $ from 'jquery';



$('.menu-li-03').click(function(){
  $('.mobile-icon-arrow01').fadeToggle(500)

})
$('.service-item').click(function(){
  $('.service-menu').slideToggle()
})
$('.service-item').click(function(){
  $('.mobile-icon-arrow02').fadeToggle()
})
$('.menu-li-01').click(function(){
  $('.mobile-menu-arrow01').fadeToggle(500)

})



$('.menu-li-02').click(function(){
  $('.mobile-menu-arrow02').fadeToggle(500)
})

// Slick version 1.5.8
//chage lang 
$('.icon-earth').hover(function () {
  $('.toggle-menu').fadeIn(500)
})



var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true });



//form

var form = document.getElementById("my-form");



async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    alert('成功寄出！')
    form.reset()

  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)


//mobile_nav
const header = document.querySelector('.header');
const icon = document.querySelector('.icon-container');
icon.onclick = function () {
  header.classList.toggle('menu-open');
  $('.icon-fit-cart').fadeToggle()
  $('.logo img').fadeToggle()
}
$('.menu-item-product a').click(function () {
  $('.menu-ul').slideToggle(500)
})

$('.menu-wireless').click(function () {
  $('.menu-inside-wireless').slideToggle(500)
})
$('.menu-simulator').click(function () {
  $('.menu-inside-simulator').slideToggle(500)
})



wow.init();


$('.mobile_product').click(function () {
  $('.inside_ul').animate({
    'visibility': 'visible'
  }, 500)
})

$('#product_toggle').click(function () {
  $('.inside_product_nav ').slideToggle(500)
})


$(".mobile_gotop").click(function () {
  $("html,body").animate(
    {
      scrollTop: 0,
    },
    "slow"
  );
});




var mediaQuery = window.matchMedia("(max-width:1100px)");

$(document).ready(function () {
  var stickyNavTop = $("nav").offset().top;

  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $("nav").addClass("sticky");

      $("#nav_product").hover(function () {
        $(".product_toggle").css("top", "11.5vh");
      });
    } else {
      $("nav").removeClass("sticky");

      $("#nav_product").hover(function () {
        $(".product_toggle").css("top", "11.5vh");
        if (mediaQuery.matches) {
          $(".product_toggle").css("top", "7vh");
        }
      });
    }
  };

  stickyNav();

  $(window).scroll(function () {
    stickyNav();
  });
});
//top_fix_nav  virticle carousel
$(document).ready(function () {
  $(".top_fix_nav").slick({
    vertical: true,
    dots: false,
    autoplay: true,
  });
});






// activation zoom plugin


$('.items').slick({
  slidesToShow: 3,
  dots: true,
  infinite: true,
  slideToScroll: true,
  centerMode: true,
});

$(".slick-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,

  autoplay: true,
  speed: 400,
  infinite: true,
  responsive: [

    {
      breakpoint: 1226,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 971,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
    , {
      breakpoint: 540,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]

});





var mySwiper = new Swiper(".swiper-container", {
  direction: "vertical",
  loop: true,
  pagination: ".swiper-pagination",
  grabCursor: true,
  speed: 1000,
  paginationClickable: true,
  parallax: true,
  autoplay: false,
  effect: "slide",
  mousewheelControl: 1,
});




