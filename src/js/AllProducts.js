import 'bootstrap';
import '../css/AllProducts.scss';
import '../css/style.scss';
import $ from 'jquery';
import 'slick-carousel';

import 'swiper/swiper-bundle.css';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs'


import LazyLoad from "vanilla-lazyload";

$('.icon-earth').hover(function () {
  $('.toggle-menu').fadeIn(500)
})



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


$('#product_toggle').click(function () {
  $('.inside_product_nav ').slideToggle(500)
})

const lazyLoadOptions = {
  elements_selector: ".lazy",
  to_webp: true,
};
const pageLazyLoad = new LazyLoad(lazyLoadOptions);
const logEvent = (eventName, element) => {
  console.log(
    Date.now(),
    eventName,
    element.getAttribute("data-src"),
    element.getAttribute("src")
  );
};


var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true });

wow.init();



//topnav close
$('.topFix_nav_close').click(function () {
  $('.top_fix_nav').slideUp();
})




//      const quotes = document.querySelectorAll(".quote");


// ScrollTrigger.addEventListener("refresh", setupSplits);
// setupSplits();


var mediaQuery = window.matchMedia('(max-width:1100px)')



$(document).ready(function () {
  var stickyNavTop = $("nav").offset().top;

  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();

    if (scrollTop > stickyNavTop) {
      $("nav").addClass("sticky");

      $('#nav_product').hover(function () {
        $('.product_toggle').css('top', '11.5vh')
      })
    } else {
      $("nav").removeClass("sticky");

      $('#nav_product').hover(function () {
        $('.product_toggle').css('top', '11.5vh')
        if (mediaQuery.matches) {
          $('.product_toggle').css('top', '7vh')
        }
      })
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





// activation carousel plugin
var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 5,
  paginationClickable: true,

  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
  }
});
var galleryTop = new Swiper('.gallery-top', {
  loop: true,
  swiperDelay: 2000,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs
  },
});
// change carousel item height
// gallery-top
let productCarouselTopWidth = $('.gallery-top').outerWidth();
$('.gallery-top').css('height', productCarouselTopWidth);

// gallery-thumbs
let productCarouselThumbsItemWith = $('.gallery-thumbs .swiper-slide').outerWidth();
$('.gallery-thumbs').css('height', productCarouselThumbsItemWith);

// activation zoom plugin


$('.items').slick({
  slidesToShow: 3,
  dots: true,
  infinite: true,
  slideToScroll: true,
  centerMode: true,
});

$(".slick-slider").slick({
  slidesToShow: 5,
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





$(function () {
  $('[data-toggle="popover"]').popover()
})
$(function () {
  $('.title_wrap').popover({
    container: 'body'
  })
})



//form

var form = document.getElementById("my-form");
var form02 = document.getElementById("my-form02");
var form03 = document.getElementById("my-form03");
var form04 = document.getElementById("my-form04");


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
    form03.reset()
    form04.reset()
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
form02.addEventListener("submit", handleSubmit)
form03.addEventListener("submit", handleSubmit)
form04.addEventListener("submit", handleSubmit)

