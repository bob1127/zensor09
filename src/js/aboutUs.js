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

wow.init();
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



 //title text animation
 const quotes = document.querySelectorAll(".quote");

 function setupSplits() {
   quotes.forEach((quote) => {
     // Reset if needed
     if (quote.anim) {
       quote.anim.progress(1).kill();
       quote.split.revert();
     }

     quote.split = new SplitText(quote, {
       type: "lines,words,chars",
       linesClass: "split-line",
     });

     // Set up the anim
     quote.anim = gsap.from(quote.split.chars, {
       scrollTrigger: {
         trigger: quote,
         toggleActions: "restart pause resume reverse",
         start: "top 50%",
       },
       duration: 0.6,
       ease: "circ.out",
       y: 80,
       stagger: 0.02,
     });
   });
 }

 ScrollTrigger.addEventListener("refresh", setupSplits);
 setupSplits();