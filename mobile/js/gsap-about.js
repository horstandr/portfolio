var tl = gsap.timeline()

tl
.from(".about-desc", {duration: 0.5, y:-700, ease:"power1.inOut"})
.from(".about-title", {duration:0.5, y: -500, ease: "power1.inOut"})
.from(".about-contact-me", {duration:0.5, y:1000, ease: "power1.inOut"})
.from(".menu-btn", {duration: 0.5, y: 700, ease: "power1.inOut"})
.to(".about-contact-me", {delay: 4, duration: 0.5, scale: 1.4, ease: "power1.inOut"})
.to(".about-contact-me", {duration: 0.5, scale: 1, ease: "power1.inOut"});