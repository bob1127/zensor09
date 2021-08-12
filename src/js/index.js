import 'bootstrap';
import '../css/style.scss';
import '../css/index.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

AOS.init();

import $ from 'jquery';
import 'slick-carousel';

import LazyLoad from "vanilla-lazyload";


$(window).scroll(function(){
  if($(this).scrollTop()>700){
    $('#gotop').fadeIn(500)
  }else(
    $('#gotop').fadeOut(500)
  )
})
$('#gotop img').click(function(){
  $('html,body').animate({
    scrollTop: 0
  },600)
})
if($(window).width()<550){
  $(window).scroll(function(){
  
  if($(this).scrollTop()>700){
    $('#mobile_buttons').fadeIn(500)
  }else(
    $('#mobile_buttons').fadeOut(500)
  )
  })
}


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


$('.icon-earth').click(function(){
  $('.toggle-menu').fadeToggle(500)
 
  
})

$('.wechat-btn').click(function(){
  $('.wechat-modal').fadeIn(400);

   $('.modal,.modal-backdrop').removeClass('show')
   $('.modal-backdrop').css('display','none')
})

$('.wechat-close').click(function(){
  $('.wechat-modal').fadeOut();
})
  

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
 


//隱私條款
$('#policy-btn').click(function(){
  $('.policy').fadeOut();
})  
$('#product_toggle').click(function(){
  $('.inside_product_nav ').slideToggle(500)
})


//圖片延遲載入
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


$('.bars').click(function(){
  $('.bars').hide(500)
})

$('.bars').click(function(){
  $('.mobile_nav ul').css('visibility','visible')
})
$('.mobile_nav_toggle').click(function(){
  $('.bars').delay(3000).show(500)
})


//top_fix_nav
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




      $('.mobile_product').click(function(){
        $('.inside_ul').animate({
          'visibility':'visible'
        },500)
      })

     

      $('.topFix_nav_close').click(function(){
        $('.top_fix_nav').slideUp();
      })
     



     
/*
function el(selector) { return document.querySelector(selector) }
function els(selector) { return document.querySelectorAll(selector) }
function on(selector, event, action) { els(selector).forEach(e => e.addEventListener(event, action)) }
function cookie(name) { 
  let c = document.cookie.split('; ').find(cookie => cookie && cookie.startsWith(name+'='))
  return c ? c.split('=')[1] : false; 
}



on('.cookie-popup button', 'click', () => {
  el('.cookie-popup').classList.add('cookie-popup--accepted');
  document.cookie = `cookie-accepted=true`
});


if (cookie('cookie-accepted') !== "true") {
  el('.cookie-popup').classList.add('cookie-popup--not-accepted');
}

*/

/* page buttons handlers */

function _reset() {
  document.cookie = 'cookie-accepted=false'; 
  document.location.reload();
}

function _switchMode(cssClass) {
  el('.cookie-popup').classList.toggle(cssClass);
}

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
        alert('Successful！')
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)
       
