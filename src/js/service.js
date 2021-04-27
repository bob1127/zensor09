import 'bootstrap';
import '../css/service.scss';
import '../css/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> 
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import fontawesome from '@fortawesome/fontawesome'
import  fas  from '@fortawesome/fontawesome-free-solid';
import fab  from '@fortawesome/fontawesome-free-brands';
import far from '@fortawesome/fontawesome-free-regular';
import gsap from "gsap";
AOS.init();
$('.mobile_product').click(function(){
  $('.inside_ul').animate({
    'visibility':'visible'
  },500)
})

$('#product_toggle').click(function(){
  $('.inside_product_nav ').slideToggle(500)
})
const open = document.querySelector('.container');
      const close = document.querySelector('.close_mobile');
      var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
      open.addEventListener('click', () => {
        if (tl.reversed()) {
          tl.play();
        } else {
          tl.to('nav', { right: 0 })
            .to('nav', { height: '100vh' }, '-=.1')
            .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .05 }, '-=.8')
            .to('.close_mobile', { opacity: 1, pointerEvents: 'all' }, "-=.8")
            .to('nav h2', { opacity: 1 }, '-=.1');
        }
      });
  
      close.addEventListener('click', () => {
        tl.reverse();
      });
      $('.bars').click(function(){
        $('.bars').hide(500)
      })
     
      $('.bars').click(function(){
        $('.mobile_nav ul').css('visibility','visible')
      })
      $('.mobile_nav_toggle').click(function(){
        $('.bars').delay(3000).show(500)
      })


fontawesome.library.add(fas,fab,far)

//topnav close
$('.topFix_nav_close').click(function(){
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
    
      $('#nav_product').hover(function(){
        $('.product_toggle').css('top','11.5vh')
      })
    } else {
      $("nav").removeClass("sticky");
      
      $('#nav_product').hover(function(){
        $('.product_toggle').css('top','11.5vh')
        if(mediaQuery.matches){
          $('.product_toggle').css('top','7vh')
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
var $easyzoom = $('.easyzoom').easyZoom();


  $('.items').slick({
  slidesToShow: 3,
  dots:true,
  infinite: true,
  slideToScroll: true,
  centerMode: true,
  });

jQuery(".slick-slider").slick({
  slidesToShow:5,
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
                      ,{
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



