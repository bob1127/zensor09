import 'bootstrap';
import '../css/Potentiostats.scss';
import '../css/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> 

import 'swiper/swiper-bundle.css';


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
AOS.init();
//chage lang 
$('.icon-earth').click(function(){
  $('.toggle-menu').fadeToggle(500)
 
  
})