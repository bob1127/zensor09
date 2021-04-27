import 'bootstrap';
import '../css/AllProducts.scss';
import '../css/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> 

import 'swiper/swiper-bundle.css';
import 'wowjs/css/libs/animate.css';
import { WOW } from 'wowjs';
import fontawesome from '@fortawesome/fontawesome'
import  fas  from '@fortawesome/fontawesome-free-solid';
import fab  from '@fortawesome/fontawesome-free-brands';
import far from '@fortawesome/fontawesome-free-regular';
import gsap from "gsap";
import Swiper from 'swiper/bundle';


fontawesome.library.add(fas,fab,far)
var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: true });

wow.init();

 $(function() {
     $("img.lazy").lazyload({
         effect : "fadeIn"
     });

  });
AOS.init();

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



      const open = document.querySelector('.container');
      const close = document.querySelector('.close_nav');
      var tl = gsap.timeline({ defaults: { duration: 1, ease: 'expo.inOut' } });
      open.addEventListener('click', () => {
        if (tl.reversed()) {
          tl.play();
        } else {
          tl.to('nav', { right: 0 })
            .to('nav', { height: '100vh' }, '-=.1')
            .to('nav ul li a', { opacity: 1, pointerEvents: 'all', stagger: .05 }, '-=.8')
            .to('.close_nav', { opacity: 1, pointerEvents: 'all' }, "-=.8")
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
  
if($(window).width() > 600)
{
     var $easyzoom = $('.easyzoom').easyZoom();
} else {
    var $easyzoom = $('.easyzoom11').easyZoom();
}
     
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

  // templating
var colors = [ 'red', 'green', 'blue', 'orange' ];
var sizes = [ 'small', 'medium', 'large' ];
var prices = [ 10, 20, 30 ];

createItems();

var $output = $('#output');

// filter with selects and checkboxes
var $checkboxes = $('#form-ui input');

$checkboxes.change( function() {
  // map input values to an array
  var inclusives = [];
  // inclusive filters from checkboxes
  $checkboxes.each( function( i, elem ) {
    // use value if checked
    if ( elem.checked ) {
      inclusives.push( elem.value );
    }
  });
  // combine inclusive filters
  var filterValue = inclusives.join(',');
  // set filter in hash
  location.hash = 'filter=' + encodeURIComponent( filterValue );
});

var $container = $('#container');

function onHashchange() {
  var hashFilter = getHashFilter();
  // show filter for demo
  $output.text( hashFilter || '*' );
  // filter isotope
  $container.isotope({
    itemSelector: '.item',
    filter: hashFilter,
  });
}

$(window).on( 'hashchange', onHashchange );

// init Isotope with hash filter
onHashchange();

// set initial checkboxes from hash
var hashFilter = getHashFilter();
if ( hashFilter ) {
  var filters = hashFilter.split(',');
  filters.forEach( function( filter ) {
    var $checkbox = $checkboxes.filter('[value="' + filter + '"]');
    $checkbox.attr( 'checked', 'checked' );
  });
}

function getHashFilter() {
  var hash = location.hash;
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  if ( !matches ) {
    return '';
  }
  return decodeURIComponent( matches[1] );
}

//------------


function createItems() {

  var $items;
  // loop over colors, sizes, prices
  // create one item for each
  for (  var i=0; i < colors.length; i++ ) {
    for ( var j=0; j < sizes.length; j++ ) {
      for ( var k=0; k < prices.length; k++ ) {
        var color = colors[i];
        var size = sizes[j];
        var price = prices[k];
        var $item = $('<div />', {
          'class': 'item ' + color + ' ' + size + ' price' + price
        });
        $item.append( '<p>' + size + '</p><p>$' + price + '</p>');
        // add to items
        $items = $items ? $items.add( $item ) : $item;
      }
    } 
  }

  $items.appendTo( $('#container') );

}



   $(function () {
  $('[data-toggle="popover"]').popover()
})
   $(function () {
  $('.title_wrap').popover({
    container: 'body'
  })
})


