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
//mobile_nav
 const header = document.querySelector('.header');
	const icon = document.querySelector('.icon-container');
	icon.onclick = function () {
		header.classList.toggle('menu-open');
    $('.icon-fit-cart').fadeToggle()
    $('.logo img').fadeToggle()
	}
  $('.menu-item-product a').click(function(){
    $('.menu-ul').slideToggle(500)
  })

  $('.menu-wireless').click(function(){
    $('.menu-inside-wireless').slideToggle(500)
  })
$('.menu-simulator').click(function(){
    $('.menu-inside-simulator').slideToggle(500)
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

      



       var oakSlider = {
    /*------------------------------------------------
     # Slider Settings
     ------------------------------------------------*/
    settings: {
     currentSlide: 2,
     totalSlides: 0,
     animating: false,
     autoPlay: true,
     autoPlaySpeed: 8, // Increase to stay on slides for longer
     transitionSpeed: 2.75, // Changes transition speed
     autoPlayInterval: false,
     ease: "expo",
     timeline: gsap.timeline({}),
     imageScale: "",
     controls: {
       next: document.querySelector(".oakslider__next"),
       prev: document.querySelector(".oakslider__prev"),
       nav: document.querySelectorAll(".oakslider__navpoint")
     }
    },
    
    /*------------------------------------------------
     # Initiate Slider
     ------------------------------------------------*/
    init: function () {
     this.settings.totalSlides = document.querySelectorAll(
       ".oakslider__slide"
     ).length;
     this.settings.controls.prev.addEventListener("click", () => {
       this.stopAutoPlay();
       this.changeSlide("prev");
     });
     this.settings.controls.next.addEventListener("click", () => {
       this.stopAutoPlay();
       this.changeSlide("next");
     });
     this.settings.controls.nav.forEach((el, key) => {
       el.addEventListener("click", () => {
         this.stopAutoPlay();
         this.jumpToSlide(key + 1);
       });
     });
    
     this.settings.imageScale = gsap.to(".slide--active .slide__image img", 15, {
       scale: 1.1,
       ease: "sine.inOut",
       yoyo: true,
       yoyoEase: true,
       repeat: -1
     });
    
     if (this.settings.autoPlay) {
       this.autoPlay();
     }
    },
    
    /*------------------------------------------------
     # Change Slide
     ------------------------------------------------*/
    changeSlide: function (dir) {
     console.log(this.settings.animating);
     if (this.settings.animating) return;
     let animateFrom = this.settings.currentSlide;
     if (dir === "next") {
       if (this.settings.currentSlide >= this.settings.totalSlides) {
         this.settings.currentSlide = 1;
       } else {
         this.settings.currentSlide++;
       }
     } else {
       if (this.settings.currentSlide <= 1) {
         this.settings.currentSlide = this.settings.totalSlides;
       } else {
         this.settings.currentSlide--;
       }
     }
     this.slideAnimation(animateFrom, this.settings.currentSlide, dir);
    },
    
    /*------------------------------------------------
     # Slide Navigation
     ------------------------------------------------*/
    jumpToSlide: function (slide) {
     if (this.settings.animating || slide === this.settings.currentSlide) return;
     let animateFrom = this.settings.currentSlide;
     this.settings.currentSlide = slide;
     if (slide > animateFrom) {
       dir = "next";
     } else {
       dir = "prev";
     }
    
     this.slideAnimation(animateFrom, this.settings.currentSlide, dir);
    },
    
    /*------------------------------------------------
     # Autoplaying
     ------------------------------------------------*/
    autoPlay: function () {
     this.settings.autoPlay = true;
    
     let el = this.settings.controls.nav[this.settings.currentSlide - 1]
       .children[0].children[0];
     this.settings.timeline.fromTo(
       el,
       this.settings.autoPlaySpeed - this.settings.transitionSpeed,
       {
         x: "-100%"
       },
       {
         x: 0,
         ease: "none",
         delay: 0.5,
         onComplete: () => {
           this.changeSlide("next");
         }
       }
     );
    },
    
    stopAutoPlay: function () {
     if (this.settings.autoPlay) {
       this.settings.timeline.progress(100);
     }
     this.settings.autoPlay = false;
    },
    
    /*------------------------------------------------
     # Update Nav
     ------------------------------------------------*/
    updateNav: function (from, to) {
     gsap.to(
       this.settings.controls.nav[from - 1].children[0],
       this.settings.transitionSpeed,
       {
         width: 55,
         ease: this.settings.ease + ".inOut"
       }
     );
     gsap.to(
       this.settings.controls.nav[from - 1].children[1],
       this.settings.transitionSpeed,
       {
         opacity: 0,
         ease: this.settings.ease + ".inOut"
       }
     );
     gsap.to(
       this.settings.controls.nav[to - 1].children[0],
       this.settings.transitionSpeed,
       {
         width: 95,
         ease: this.settings.ease + ".inOut"
       }
     );
     gsap.to(
       this.settings.controls.nav[to - 1].children[1],
       this.settings.transitionSpeed,
       {
         opacity: 1,
         ease: this.settings.ease + ".inOut"
       }
     );
     gsap.to(
       this.settings.controls.nav[from - 1].children[0].children[0],
       this.settings.transitionSpeed,
       {
         x: "100%",
         ease: this.settings.ease + ".inOut"
       }
     );
    },
    
    /*------------------------------------------------
     # Slide Animation
     ------------------------------------------------*/
    slideAnimation: function (from, to, dir) {
     this.settings.animating = true;
    
     console.log(this.settings.animating);
    
     this.updateNav(from, to);
    
     from = '.oakslider__slide[data-slide="' + from + '"]';
     to = '.oakslider__slide[data-slide="' + to + '"]';
    
     this.settings.timeline.clear();
     this.settings.timeline.play(0);
    
     this.settings.timeline
       .set(to, { display: "block" })
       .to(
         from + " .slide__content *",
         (this.settings.transitionSpeed / 100) * 21,
         {
           y: -20,
           opacity: 0,
           ease: this.settings.ease + ".in",
           stagger: 0.1
         },
         "slideAnimation"
       )
       .fromTo(
         to + " .slide__content *",
         (this.settings.transitionSpeed / 100) * 40,
         {
           y: 20,
           opacity: 0
         },
         {
           y: 0,
           opacity: 1,
           ease: "Power3.out",
           stagger: 0.1
         },
         ">0.5"
       )
       .fromTo(
         from + " .slide__image",
         this.settings.transitionSpeed,
         {
           display: "block",
           x: "0%"
         },
         {
           x: dir === "next" ? "-100%" : "100%",
           ease: this.settings.ease + ".inOut"
         },
         "slideAnimation"
       )
       .fromTo(
         from + " .slide__image img",
         this.settings.transitionSpeed,
         {
           transformOrigin: "center",
           x: "0%"
         },
         {
           x: dir === "next" ? "50%" : "-50%",
           ease: this.settings.ease + ".inOut"
         },
         "slideAnimation"
       )
       .fromTo(
         to + " .slide__image img",
         this.settings.transitionSpeed,
         {
           transformOrigin: "center",
           x: dir === "next" ? "-50%" : "50%"
         },
         {
           x: "0%",
           ease: this.settings.ease + ".inOut"
         },
         "slideAnimation"
       )
       .fromTo(
         to + " .slide__image",
         this.settings.transitionSpeed,
         {
           display: "block",
           transformOrigin: "right center",
           x: dir === "next" ? "100%" : "-100%"
         },
         {
           x: "0%",
           ease: this.settings.ease + ".inOut",
           onComplete: () => {
             this.settings.animating = false;
             gsap.set(from, { display: "none" });
             this.settings.imageScale.kill();
             gsap.set(from + " .slide__image", { scale: 1 });
             this.settings.imageScale = gsap.to(to + " .slide__image img", 15, {
               scale: 1.1,
               ease: "sine.inOut",
               yoyo: true,
               yoyoEase: true,
               repeat: -1
             });
           }
         },
         "slideAnimation"
       );
    
     if (this.settings.autoPlay) {
       let el = this.settings.controls.nav[this.settings.currentSlide - 1]
         .children[0].children[0];
       this.settings.timeline.fromTo(
         el,
         this.settings.autoPlaySpeed - this.settings.transitionSpeed,
         {
           x: "-100%"
         },
         {
           x: 0,
           ease: "none",
           onComplete: () => {
             this.changeSlide("next");
           }
         },
         ">"
       );
     }
    }
    };
    
    oakSlider.init();
    