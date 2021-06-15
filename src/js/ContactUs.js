import 'bootstrap';
import '../css/ContactUs.scss';
import '../css/style.scss';
import $ from 'jquery';
import 'slick-carousel';

import 'swiper/swiper-bundle.css';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs'


import LazyLoad from "vanilla-lazyload";
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



$('.mobile_product').click(function () {
  $('.inside_ul').animate({
    'visibility': 'visible'
  }, 500)
})

$('#product_toggle').click(function () {
  $('.inside_product_nav ').slideToggle(500)
})



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

//chage lang 
$('.icon-earth').hover(function () {
  $('.toggle-menu').fadeIn(500)
})

//form

var form = document.getElementById("my-form");
var form02 = document.getElementById("my-form02");



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
    form02.reset()

  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
form02.addEventListener("submit", handleSubmit)










