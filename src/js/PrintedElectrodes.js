import 'bootstrap';
import '../css/Potentiostats.scss';
import '../css/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> 

import 'swiper/swiper-bundle.css';



AOS.init();
//chage lang 
$('.icon-earth').click(function(){
  $('.toggle-menu').fadeToggle(500)
 
  
})