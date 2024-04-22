//Bibliotheques gratuites
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(MotionPathPlugin);

//Bibliotheques Payantes


// Generales
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

gsap.to(".nuage-groupe",{y:"-5%", yoyo: true, repeat: -1, ease: 'power1.inOut', duration: 0.5})

// Section 1
let secUnParallax = gsap.timeline({
  scrollTrigger: {
    pin: true,
    scrub: true,
    markers: true,
    start: 'center 50%',
    end: 'bottom 25%',
    trigger: '.parallax',
  },
});
  secUnParallax.to(".para00",{backgroundPosition:"100% 100%",duration:18,ease:'none'},'<')
  secUnParallax.to(".para03",{y:"2%", yoyo: true, repeat: 40, duration:0.5 ,ease:'none'},'<')
  secUnParallax.to(".para01",{backgroundPosition:"100% 100%",duration:16,ease:'none'},'<')
  secUnParallax.to(".para04",{backgroundPosition:"100% 100%",duration:14,ease:'none'},'<')
  secUnParallax.to(".para05",{backgroundPosition:"100% 100%",duration:12,ease:'none'},'<')
  secUnParallax.to(".para03",{x:"70%",duration:10 ,ease:'none'}, 12)
  secUnParallax.to(".para03",{opacity: "0", duration: 3})
  secUnParallax.fromTo(".sec1-phrase01", {opacity: 0}, {opacity: 1, duration: 0.5}, 1)
  secUnParallax.to(".sec1-phrase01", {opacity: 0, duration: 0.5}, '<4')
  secUnParallax.fromTo(".sec1-phrase02", {opacity: 0}, {opacity: 1, duration: 0.5}, '<0.5')
  secUnParallax.to(".sec1-phrase02", {opacity: 0, duration: 0.5}, '<4')
  secUnParallax.fromTo(".sec1-phrase03", {opacity: 0}, {opacity: 1, duration: 0.5}, '<0.5')
  secUnParallax.to(".sec1-phrase03", {opacity: 0, duration: 0.5}, '<4')
  secUnParallax.fromTo(".sec1-phrase04", {opacity: 0}, {opacity: 1, duration: 0.5}, '<0.5')
  secUnParallax.to(".sec1-phrase04", {opacity: 0, duration: 0.5}, '<4')


let secUnTombe= gsap.timeline({
  scrollTrigger: {
    scrub: true,
    markers: true,
    pin: true,
    start: '25% 50%',
    end: 'bottom 25%',
    trigger: '.tombe',
  },
});
  secUnTombe.to("#sec1-lilo2",{y:"200%",duration:5 ,ease:'none'})
  secUnTombe.to("#sec1-lilo2",{opacity: "0", duration: 3})

// Section Deux
  let secDeux = gsap.timeline();
  secDeux.to(".poisson1",{x:"-650%",duration:3 ,ease:'power1.in'})
  secDeux.to(".poisson3",{x:"650%",duration:3.5 ,ease:'power1.in'},'<')
  secDeux.to(".poisson4", {
    duration: 5, 
    repeat: 12,
    repeatDelay: 3,
    yoyo: true,
    ease: "power1.inOut",
    motionPath:{
      path: [
        {x: '45%', y: '50%'}, 
        {x: '80%', y: '-79%'}
      ],
      autoRotate: true,
      alignOrigin: [0.5, 0.5]
    }
  },'<');
  


// Section Trois
let secTrois = gsap.timeline();
  secTrois.to("#sec3-nuage",{y:"175vh",duration:10 ,ease:'none'})
  secTrois.to(".groupecrystal03",{x:"330%", y:"-60%", rotate:"20deg" ,duration:0.5 ,ease:'power1.out'})
  secTrois.to(".groupecrystal02",{x:"-320%", y:"-60%", rotate:"-50deg" ,duration:0.5 ,ease:'power1.out'},"<")
  secTrois.to(".groupecrystal01",{y:"100%",duration:0.5, rotate:"-20deg" ,ease:'power1.out'},"<")
  secTrois.to(".groupecrystal04",{y:"-100%",duration:0.5 ,ease:'power1.out'},"<")

