var tl = gsap.timeline();

tl.from(".contact-title", {duration:0.5, y:-500, ease: "power1.inOut"})
.from('.contact-side-img', {duration:0.5, x: 1000, ease: "power1.inOut"})
.from(".contact-desc", {duration:0.5, x: -1000, ease: "power1.inOut"})