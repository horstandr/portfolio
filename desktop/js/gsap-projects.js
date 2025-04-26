var tl = gsap.timeline();

tl
.from('.title', {duration: 0.5, y: -500, ease: "power1.inOut"})
.from('.projects-side-img', {duration: 0.5, x: 800, ease: "power1.inOut"})
.to('.project', {duration: 0.2, stagger: 0.1, opacity: 1})