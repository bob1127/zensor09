import 'bootstrap';
import '../css/style.scss';
import '../css/index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

AOS.init();

import gsap from "gsap";
import $ from 'jquery';
import 'slick-carousel';

import LazyLoad from "vanilla-lazyload";
$('#product_toggle').click(function(){
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


var jQuery = $

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



    

      $(".slick-slider").slick({
        slidesToShow:5,
        slidesToScroll: 1,
        arrows: true,
        
        autoplay: true,
        speed: 800,
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


      $("img").lazyload();

      $('.mobile_product').click(function(){
        $('.inside_ul').animate({
          'visibility':'visible'
        },500)
      })

     

      $('.topFix_nav_close').click(function(){
        $('.top_fix_nav').slideUp();
      })
    

      $("img").lazyload();
      $(function() {
         $("img.lazy").lazyload({
             effect : "fadeIn"
         });
    
      });
      $('#policy-btn').click(function(){
        $('.policy').slideToggle()
      })

     