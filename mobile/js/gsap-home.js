var tl = gsap.timeline();

if (localStorage.getItem('rbg') == true || localStorage.getItem('bgcolor')) {
  // Removes loading screen
  document.getElementById('loader-screen').style.display = 'none';
} else {
  // Loading screen loader
  tl
  .to(".loader-screen", {duration:0,background:"var(--secundary)"})
  // Makes the 'let nthng in' text visible
  .from(".loader-desc-1", {duration: 0.5, y: -500, opacity: 0, ease:"power1.inOut"})
  .from(".loader-title", {duration: 0.5, y: -500, opacity: 0, ease:"power1.inOut"})
  .from(".loader-desc-2", {duration: 0.5, y: -500, opacity: 0, ease:"power1.inOut"})
  // Lets the text dissapear
  .to(".loader-desc-1", {delay: 2, duration: 0.5, y: 500, opacity: 0, ease:"power1.inOut"})
  .to(".loader-title", {duration: 0.5, y: 500, opacity: 0, ease:"power1.inOut"})
  .to(".loader-desc-2", {duration: 0.5, opacity: 0, y:500, ease:"power1.inOut"})
  .to(".loader-screen", {delay: 0.5, duration: 0, opacity: 0, display: 'none'});
}


// Main loader
tl
.from(".title-desc", {duration:0.5,y:-2000,ease:"power2.inOut"})
.from(".title-text", {duration:0.5,y:-2000, ease: "power2.inOut"})
.from(".illustration", {duration: 0.5, stagger: 0.2, y: 2000, ease:"power2.inOut"})
.from(".menu-btn", {duration: 0.5, y: 2000, ease: "power2.inOut"})
.to(".menu-btn>p", {duration:0.5,opacity:1,delay:5})
.to(".menu-btn>p", {duration:0.5,opacity:0,delay:3});