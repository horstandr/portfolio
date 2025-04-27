var tl = gsap.timeline();

if (localStorage.getItem('rbg') == true || localStorage.getItem('bgcolor')) {
  
  // Makes the loader page dissapear.
  document.getElementById('loader-screen').style.display = 'none';

} else {

  // The first time loader page
  tl.to(".loader-screen", {duration:0,background:"var(--secundary)"})
  // Makes the 'loader screen' text visible
  .from(".loader-desc-1", {duration: 0.5, y: -500, opacity: 0, ease:"power1.inOut"})
  .from(".loader-title", {duration: 0.5, y: -500, opacity: 0, ease:"power1.inOut"})
  .from(".loader-desc-2", {duration: 0.5, y: -500, opacity: 0, ease:"power1.inOut"})
  // Lets the text dissapear
  .to(".loader-desc-1", {delay: 2, duration: 0.5, y: 500, opacity: 0, ease:"power1.inOut"})
  .to(".loader-title", {duration: 0.5, y: 500, opacity: 0, ease:"power1.inOut"})
  .to(".loader-desc-2", {duration: 0.5, opacity: 0, y:500, ease:"power1.inOut"})
  .to(".loader-screen", {delay: 0.5, duration: 0, opacity: 0, display: 'none'})
  
  
}

// Main page loader
tl.from(".illustration", {duration: 0.5, stagger: 0.2, y: -500, ease:"power2.inOut"})
  .from(".menu-btn", {duration: 0.5, x: -1000, ease: "power2.inOut"})
  .from(".header-text", {duration:0.5,x:1200, ease: "power2.inOut"})
  .to(".menu-btn>p", {duration:0.5,opacity:1,delay:5})
  .to(".menu-btn>p", {duration:0.5,opacity:0,delay:3});