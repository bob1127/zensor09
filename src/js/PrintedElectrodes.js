import 'bootstrap';
import '../css/Potentiostats.scss';
import '../css/style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> 

import 'swiper/swiper-bundle.css';



AOS.init();
//chage lang 
$('.icon-earth').hover(function () {
  $('.toggle-menu').fadeIn(500)
})