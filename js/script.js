const swiper = new Swiper('.swiper', {
  // Optional parameters
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev'
  },
 
  grabCursor:true,
  autoheight:true,
  slidesPerView:3,
  spaceBetween:10,
  speed:800,
  });
const bg= document.querySelector('.headers');
const tokioContent=document.querySelector('.head-content-tokio')
const stambulContent=document.querySelector('.head-content-stambul')
const londonContent=document.querySelector('.head-content-london')
const sliderTokio=document.querySelector('.tokio-slide')
const sliderStambul=document.querySelector('.stambul-slide')
const sliderLondon=document.querySelector('.london-slide')
document.addEventListener("click", function(e) {
  if (e.target.className=="img-grad1") {
   ;
   //ваши действия
   bg.style.backgroundImage = "url(img/chineas.jpg)"
   tokioContent.style.display= "block"
   stambulContent.style.display= "none"
   londonContent.style.display="none"

  sliderTokio.style.display= "block"
  sliderStambul.style.display= "none"
  sliderLondon.style.display= "none"

   window.scrollTo (0,120)
  }
});
document.addEventListener("click", function(e) {
  if (e.target.className=="img-grad2") {
   //ваши действия
   bg.style.backgroundImage = "url(img/head-stambul.jpg)"
    stambulContent.style.display= "block"
     tokioContent.style.display= "none"
     londonContent.style.display="none"

     sliderStambul.style.display= "block"
     sliderTokio.style.display= "none"
     sliderLondon.style.display= "none"

    window.scrollTo (0,120)
     vid1.setAttribute('src','video/Stambul/stambul.mp4')
  }
});
document.addEventListener("click", function(e) {
  if (e.target.className=="img-grad3") {
   //ваши действия
   bg.style.backgroundImage = "url(img/head-london.jpg)"
     londonContent.style.display="block"
    tokioContent.style.display= "none"
   stambulContent.style.display= "none"
    
   sliderLondon.style.display= "block"
   sliderTokio.style.display= "none"
  sliderStambul.style.display= "none"
  
   
    window.scrollTo (0,120)
  }
});
 new Swiper('.feet-slider ', {
  // Optional parameters
  navigation:{
    nextEl:'.swiper-button-next',
    prevEl:'.swiper-button-prev'
  },
  autoplay:{
    delay:5000,
    disableOnInteraction:true,
  },
 loop:true,
  effect:'cube',
  cubeEffect:{
    slideShadows:true,
    shadow:true,
    shadowOffset:20,
    shadowScale:0.94
  },
  grabCursor:true,
  autoheight:true,
  slidesPerView:1,
  spaceBetween:10,
  speed:800,
  });
 const aboutinf=document.querySelector('.about-itm')
 const tripinf=document.querySelector('.trip-itm')
 const feetinf=document.querySelector('.feet-itm')
 const continf=document.querySelector('.cont-inf')
 aboutinf.onclick=()=>{
  window.scrollTo(0,2400)
 };
 tripinf.onclick=()=>{
  window.scrollTo(0,800)
 };
 feetinf.onclick=()=>{
  window.scrollTo(0,3050)
 };
 continf.onclick=()=>{
  window.scrollTo(0,3500)
 }