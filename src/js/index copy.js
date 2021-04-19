import 'bootstrap';
import '../css/style.scss';

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

 
    
    //images gsap

    gsap.registerPlugin(ScrollTrigger);

    let revealContainers = document.querySelectorAll(".reveal");

    revealContainers.forEach((container) => {
      let image = container.querySelector("img");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset",
        },
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, 1.5, {
        xPercent: -100,
        ease: Power2.out,
      });
      tl.from(image, 1.5, {
        xPercent: 100,
        scale: 1.3,
        delay: -1.5,
        ease: Power2.out,
      });
    });




  
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



      const open = document.querySelector('.container');
      const close = document.querySelector('.close');
      var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
      open.addEventListener('click', () => {
        if (tl.reversed()) {
          tl.play();
        } else {
          tl.to('nav', { right: 0 })
            .to('nav', { height: '100vh' }, '-=.1')
            .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .05 }, '-=.8')
            .to('.close', { opacity: 1, pointerEvents: 'all' }, "-=.8")
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

      $('.mobile_gotop').click(function(){
        $('html,body').animate({
          scrollTop:0
        },'slow')
      })

      $('#gotop').click(function(){
        $('html,body').animate({
          scrollTop:0
        },'slow')
      })


      jQuery(".slick-slider").slick({
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


      // (function ($) {
      //   $.fn.countTo = function (options) {
      //     options = options || {};
      
      //     return $(this).each(function () {
           
      //       var settings = $.extend({}, $.fn.countTo.defaults, {
      //         from:            $(this).data('from'),
      //         to:              $(this).data('to'),
      //         speed:           $(this).data('speed'),
      //         refreshInterval: $(this).data('refresh-interval'),
      //         decimals:        $(this).data('decimals')
      //       }, options);
      
           
      //       var loops = Math.ceil(settings.speed / settings.refreshInterval),
      //         increment = (settings.to - settings.from) / loops;
      
      //       var self = this,
      //         $self = $(this),
      //         loopCount = 0,
      //         value = settings.from,
      //         data = $self.data('countTo') || {};
      
      //       $self.data('countTo', data);
      
          
      //       if (data.interval) {
      //         clearInterval(data.interval);
      //       }
      //       data.interval = setInterval(updateTimer, settings.refreshInterval);
      
           
      //       render(value);
      
      //       function updateTimer() {
      //         value += increment;
      //         loopCount++;
      
      //         render(value);
      
      //         if (typeof(settings.onUpdate) == 'function') {
      //           settings.onUpdate.call(self, value);
      //         }
      
      //         if (loopCount >= loops) {
             
      //           $self.removeData('countTo');
      //           clearInterval(data.interval);
      //           value = settings.to;
      
      //           if (typeof(settings.onComplete) == 'function') {
      //             settings.onComplete.call(self, value);
      //           }
      //         }
      //       }
      
      //       function render(value) {
      //         var formattedValue = settings.formatter.call(self, value, settings);
      //         $self.text(formattedValue);
      //       }
      //     });
      //   };
      
      //   $.fn.countTo.defaults = {
      //     from: 0,              
      //     to: 0,               
      //     speed: 2000,          
      //     refreshInterval: 1, 
      //     decimals: 0,          
      //     formatter: formatter,  
      //     onUpdate: null,      
      //     onComplete: null     
      //   };
      
      //   function formatter(value, settings) {
      //     return value.toFixed(settings.decimals);
      //   }
      // }(jQuery));
      
      //     jQuery(function ($) {
           
         
      //       $('.timer').each(count);
            
       
      //       $( window ).scroll(function () {console.log($(window).scrollTop());
      //     if($(window).scrollTop() > 300 && $(window).scrollTop() < 850)
      //     {
      //        $('.timer').each(count);
      //      }
      //       });
            
      //       function count(options) {
      //         var $this = $(this);
      //         options = $.extend({}, options || {}, $this.data('countToOptions') || {});
      //         $this.countTo(options);
      //       }
      //     });