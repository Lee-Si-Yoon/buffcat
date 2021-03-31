const mainPage = document.querySelector(".mainpage");
const mainImage = mainPage.querySelector("img");
const introText = mainPage.querySelector("h1");
const video = mainPage.querySelector("video");

const subPage = document.querySelector(".subpage");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//MAINPAGE
const scene = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: mainPage,
  triggerHook: 0,
})
  .addIndicators()
  .setPin(mainPage)
  .addTo(controller);

//Text Animation
const textAnim = TweenMax.fromTo(introText, 4, { opacity: 1 }, { opacity: 0 , delay : 1});

const scene2 = new ScrollMagic.Scene({
  duration: 3000,
  triggerElement: mainPage,
  triggerHook: 0,
})
  .setTween(textAnim)
  .addTo(controller);

//SUBPAGE

/*
//Animation
let accelamount = 0.3;
let scrollpos = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = delay;
  //console.log(scrollpos, delay)
}, 16.6);
*/