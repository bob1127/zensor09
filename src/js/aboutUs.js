import 'bootstrap';
import '../css/aboutUs.scss';
import '../css/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> 
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs'
var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true });
import fontawesome from '@fortawesome/fontawesome'
import  fas  from '@fortawesome/fontawesome-free-solid';
import fab  from '@fortawesome/fontawesome-free-brands';
import far from '@fortawesome/fontawesome-free-regular';
import gsap from "gsap";


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

wow.init();
AOS.init();

 $('.mobile_product').click(function(){
  $('.inside_ul').animate({
    'visibility':'visible'
  },500)
})

$('#product_toggle').click(function(){
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

$("#gotop").click(function () {
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

      



      