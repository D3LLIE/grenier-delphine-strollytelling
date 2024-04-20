const action = document.querySelector(".appel-action svg");
const sprite2 = document.querySelector(".spritesheet2");
const body = document.querySelector("body");
let monMinuteur;

gsap.to(action, { y: "10px", duration: 0.5, repeat: -1, ease: "power2.in", yoyo: "true", fill: "#a04959"});

window.addEventListener('scroll', function() {
    body.classList.add("is-scrolling");
    clearTimeout(monMinuteur);
    monMinuteur = setTimeout(function(){
        body.classList.remove('is-scrolling');
       }, 100); 
  });
let secUnParallax = gsap.timeline();
  secUnParallax.to(".para00",{x:"-40%",duration:18,ease:'none'},'<')
  secUnParallax.to(".para04",{y:"2%", yoyo: true, repeat: 40, duration:0.5 ,ease:'none'},'<')
  secUnParallax.to(".para01",{x:"-40%",duration:17,ease:'none'},'<')
  secUnParallax.to(".para03",{x:"-40%",duration:16,ease:'none'},'<')
  secUnParallax.to(".para05",{x:"-40%",duration:12,ease:'none'},'<')
  secUnParallax.to(".para04",{x:"200%",duration:10 ,ease:'none'}, 12)
  secUnParallax.to(".para04",{opacity: "0", duration: 3})
  secUnParallax.to("#sec1-lilo2",{y:"200%",duration:5 ,ease:'none'})
  secUnParallax.to("#sec1-lilo2",{opacity: "0", duration: 3})
  secUnParallax.fromTo(".sec1-phrase01", {opacity: 0}, {opacity: 1, duration: 0.5}, 1)
  secUnParallax.to(".sec1-phrase01", {opacity: 0, duration: 0.5}, '<4')
  secUnParallax.fromTo(".sec1-phrase02", {opacity: 0}, {opacity: 1, duration: 0.5}, '<0.5')
  secUnParallax.to(".sec1-phrase02", {opacity: 0, duration: 0.5}, '<4')
  secUnParallax.fromTo(".sec1-phrase03", {opacity: 0}, {opacity: 1, duration: 0.5}, '<0.5')
  secUnParallax.to(".sec1-phrase03", {opacity: 0, duration: 0.5}, '<4')
  secUnParallax.fromTo(".sec1-phrase04", {opacity: 0}, {opacity: 1, duration: 0.5}, '<0.5')
  secUnParallax.to(".sec1-phrase04", {opacity: 0, duration: 0.5}, '<4')

  let secDeux = gsap.timeline();
  secDeux.to(".nuage-groupe",{y:"-5%", yoyo: true, repeat: -1, ease: 'power1.inOut', duration: 0.5})