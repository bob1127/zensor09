import 'bootstrap';
import '../css/style.scss';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

AOS.init();


import fontawesome from '@fortawesome/fontawesome'
import  fas  from '@fortawesome/fontawesome-free-solid';
import fab  from '@fortawesome/fontawesome-free-brands';
import far from '@fortawesome/fontawesome-free-regular';

import $ from 'jquery';
import 'slick-carousel';

import LazyLoad from "vanilla-lazyload";

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

fontawesome.library.add(fas,fab,far)


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

      $('#product_toggle').click(function(){
        $('.inside_product_nav ').slideToggle(500)
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