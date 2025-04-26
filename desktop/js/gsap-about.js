var tl = gsap.timeline()

tl.from(".about-title", {duration:0.5, y: -500, ease: "power1.inOut"})
.from(".about-desc", {duration: 0.5, x:-1000, ease:"power1.inOut"}, 'myLabel')
.to(".menu-btn", {duration: 0.5, right: 50, ease: "power1.inOut"}, 'myLabel')
.from(".about-side-img", {duration:0.5, x: 1000, ease: "power1.inOut"})
.to(".about-contact-me", {delay: 4, duration: 0.5, scale: 1.4, ease: "power1.inOut"})
.to(".about-contact-me", {duration: 0.5, scale: 1, ease: "power1.inOut"});