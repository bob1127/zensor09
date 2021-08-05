import 'bootstrap';
import '../css/ProductCatagory.scss';
import '../css/AllProducts.scss';
import '../css/style.scss';
import $ from 'jquery';
import 'slick-carousel';
import { WOW } from 'wowjs'

import 'wowjs/css/libs/animate.css';


$('.wechat-btn').click(function(){
  $('.wechat-modal').fadeIn(400);

   $('.modal,.modal-backdrop').removeClass('show')
   $('.modal-backdrop').css('display','none')
})

$('.wechat-close').click(function(){
  $('.wechat-modal').fadeOut();
})


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


var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true });

wow.init();


$('.icon-earth').click(function(){
  $('.toggle-menu').fadeToggle(500);
 
  
})

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


$(".slick-slider").slick({

slidesToShow: 3,
			slidesToScroll: 1,
			arrows: true,
			prevArrow: $(".arrow__left"),
			nextArrow: $(".arrow__right"),
			fade: false,
			infinite: true,
			autoplay: true,
			pauseOnHover:true,
			focusOnSelect: true,
			centerPadding: 0,
			slideMargin: 10,
			centerPadding: 0,
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



