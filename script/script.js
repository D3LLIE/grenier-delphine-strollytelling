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
let chapitreUn = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: false,
    scrub: true,
    start: 'top 0%',
    end: 'bottom 75%',
    trigger: '#section1',
  },
});
  chapitreUn.to(".para00",{backgroundPosition:"100% 100%",duration:18,ease:'none'},'<')
  chapitreUn.to(".para03",{y:"2%", yoyo: true, repeat: 40, duration:0.5 ,ease:'none'},'<')
  chapitreUn.to(".para01",{backgroundPosition:"100% 100%",duration:16,ease:'none'},'<')
  chapitreUn.to(".para04",{backgroundPosition:"100% 100%",duration:14,ease:'none'},'<')
  chapitreUn.to(".para05",{backgroundPosition:"100% 100%",duration:12,ease:'none'},'<')
  chapitreUn.to(".para03",{x:"70%",duration:10 ,ease:'none'}, 12)
  chapitreUn.to(".para03",{opacity: "0", duration: 3})
  chapitreUn.fromTo("#chapitre1", {opacity: 0}, {opacity: 1, duration: 0.5}, 1)
  chapitreUn.to("#chapitre1", {opacity: 0, duration: 0.5}, '<4')
  chapitreUn.fromTo(".sec1-phrase02", {opacity: 0}, {opacity: 1, duration: 0.5}, '<0.5')
  chapitreUn.to(".sec1-phrase02", {duration: 1, text: "Lilo, le chien au cœur pur, dansait parmi les rayons dorés du soleil.", ease: "none"}, '<6')
  chapitreUn.to(".sec1-phrase02", {duration: 1, text: "Perdue dans ses rêveries, Lilo ne vit pas le trou qui se dressait devant elle et y tomba.", ease: "none"}, '<6')
  chapitreUn.to(".parallax",{y: '-100vh', duration: 5})
  chapitreUn.to(".tombe",{y: '-100vh', duration: 5}, '<')
  chapitreUn.to("#sec1-lilo2",{y:"200%",duration:5 ,ease:'none'})
  chapitreUn.to("#sec1-lilo2",{opacity: "0", duration: 3});

let chapitreDeux = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: false,
    scrub: true,
    start: 'top 0%',
    end: 'bottom 75%',
    trigger: '#section2',
  },
})
chapitreDeux.fromTo('#chapitre2 .chapitre', {opacity: 0}, {opacity: 2, duration:1})
chapitreDeux.fromTo('#chapitre2 .sous-chapitre', {opacity: 0}, {opacity: 1, duration:1}, '<')
chapitreDeux.to(".poisson2",{x:"400%",duration:8 ,ease:'none'}, '-=1.5')
chapitreDeux.to("#chapitre2",{y: '-100vh', duration: 5})
chapitreDeux.to(".section02",{y: '-100vh', duration: 5}, '<')
chapitreDeux.to(".section02",{backgroundPosition:"100% 100%",duration:20,ease:'none'})
chapitreDeux.to(".sec2-phrase01",{text:"Lilo demanda à Mitaine si elle pouvait bien l'aider à retourner chez elle.", ease:'none', duration: 1.3}, '<+=3')
chapitreDeux.to(".sec2-phrase01",{text:"Mitaine, d'un air moqueur, accepta selon une condition.", ease:'none', duration: 1.3}, '<+=3')
chapitreDeux.to(".sec2-phrase01",{text:"Lilo sauta sur l'occasion, sans même écouter la condition de Mitaine... qui attrapa un poisson à ce même moment.", ease:'none', duration: 1.3}, '<+=3')
chapitreDeux.fromTo(".sec2-phrase01",{opacity: 1}, {opacity: 0, duration: 3}, '<3')
chapitreDeux.to(".sec2-phrase01",{y: '-100vh', duration: 5}, '<0.5')
chapitreDeux.to('#sec2-nuage', {y: '-200vh', duration: 5}, '<0.5')
chapitreDeux.fromTo('.poisson1', {x: '100%'}, {x: '-780%', duration: 8})
chapitreDeux.fromTo('.poisson3', {x: '-150%'}, {x: '700%', duration: 10}, '<0.5')


// Section Trois
let chapitreTrois = gsap.timeline({
  scrollTrigger: {
    pin: true,
    pinSpacing: false,
    scrub: true,
    marker: true,
    start: 'top 0%',
    end: 'bottom 75%',
    trigger: '#section3',
  },
});
  chapitreTrois.fromTo('#chapitre3 .chapitre', {opacity: 0}, {opacity: 2, duration:1})
  chapitreTrois.fromTo('#chapitre3 .sous-chapitre', {opacity: 0}, {opacity: 1, duration:1}, '<')
  chapitreTrois.to("#chapitre3",{y: '-100vh', duration: 5})
  chapitreTrois.to(".section03",{y: '-100vh', duration: 5}, '<')
  chapitreTrois.to(".section03",{backgroundPosition:"100% 100%",duration:18,ease:'none'})
  chapitreTrois.to(".sec3-phrase01",{text:"Pour retourner chez elle, le duo devait parcourir plusieurs défis.", ease:'none', duration: 1.3}, '<+=3')
  chapitreTrois.to(".sec3-phrase01",{text:"Des crystaux, aussi tranchant qu'un couteau se dressaient devant elles.", ease:'none', duration: 1.3}, '<+=3')
  chapitreTrois.to(".sec3-phrase01",{text:"Les évitants de près, le duo se faufilait pour les éviter.", ease:'none', duration: 1.3}, '<+=3')
  chapitreTrois.fromTo(".sec3-phrase01",{opacity: 1}, {opacity: 0, duration: 3}, '<3')
  chapitreTrois.fromTo(".crystal01", {x:'-115%'}, {x:'-5%', duration: 0.5 }, '5')
  chapitreTrois.to(".crystal01", {y:'-150%', duration: 7, ease: 'none' }, '<-0.5')
  chapitreTrois.fromTo(".crystal02", {x:'115%'}, {x:'0', duration: 0.5 }, '7')
  chapitreTrois.to(".crystal02", {y:'-150%', duration: 7, ease: 'none' }, '<-0.5')
  chapitreTrois.fromTo(".gros-crystal",{y:"175%"}, {y:"-2%", duration: 2, ease: 'none'}, '+=0.5')
  chapitreTrois.to(".groupecrystal03",{x:"330%", y:"-60%", rotate:"20deg" ,duration:0.5 ,ease:'power1.out'}, '+=3')
  chapitreTrois.fromTo("#sec3-nuage",{opacity: 1}, {opacity: 0, duration: 0.5}, '<')
  chapitreTrois.fromTo(".boom",{scale: 1}, {scale: 5, yoyo:  true, duration: 4, repeat: 1}, '<')
  chapitreTrois.fromTo(".boom",{opacity: 0}, {opacity: 1, duration: 1}, '<')
  chapitreTrois.to(".groupecrystal02",{x:"-320%", y:"-60%", rotate:"-50deg" ,duration:0.5 ,ease:'power1.out'},"<")
  chapitreTrois.to(".groupecrystal01",{y:"100%",duration:0.5, rotate:"-20deg" ,ease:'power1.out'},"<")
  chapitreTrois.to(".groupecrystal04",{y:"-100%",duration:0.5 ,ease:'power1.out'},'<')
  chapitreTrois.to(".groupecrystal04",{y:"-100%",duration:0.5 ,ease:'power1.out'},'<')
  chapitreTrois.fromTo(".gros-crystal",{opacity: 1}, {opacity: 0, duration: 3})




// Section Quatre
let chapitreQuatre = gsap.timeline() ;
chapitreQuatre.to(".sec4-phrase02", {text:"Une grotte immense se dressa devant elles, ne laissant pas de choix autre que d'y entrer.", ease:'none', duration: 1.3}, '4')
chapitreQuatre.to(".sec4-phrase02", {opacity: 0, duration: 1}, '<4')
chapitreQuatre.to("#sec4-nuage", {x: '100vw', duration: 10, ease: 'power1.in'})
chapitreQuatre.fromTo(".sec4-phrase01", {opacity: 0}, {opacity: 1, duration: 1}, '<4')
chapitreQuatre.to(".sec4-phrase01", {opacity: 0, duration: 1}, '<6')
chapitreQuatre.to("#section4-grotte", {x: '-225vw', duration: 3}, '-=2')
chapitreQuatre.to(".grotte-groupe", {y:"-5%", yoyo: 'true', repeat: -1, ease: 'power1.inOut', duration: 0.5})
chapitreQuatre.fromTo(".grotte-groupe", {opacity: 0}, {opacity: 1, duration: 2})
chapitreQuatre.fromTo(".sec4-phrase04",{opacity: 0},{opacity: 1, duration: 1}, '<1')
chapitreQuatre.to(".sec4-phrase04", {opacity: 0, duration: 2}, '<1')
chapitreQuatre.to("#section04", {backgroundPosition:"100% 100%",duration:18,ease:'none'}, '<')
chapitreQuatre.fromTo(".sec4-phrase03",{opacity: 0},{opacity: 1, duration: 1}, '<1')
chapitreQuatre.to(".sec4-phrase03", {opacity: 0, duration: 2}, '<1')
chapitreQuatre.to(".sec4-phrase04", {text: "T'as entendu ce bruit?", duration: 0},'<')
chapitreQuatre.fromTo(".yeux-oiseau", {opacity: 0}, {opacity: 1, duration: 1},'<')
chapitreQuatre.fromTo(".sec4-phrase05",{opacity: 0},{opacity: 1, duration: 1}, '<1')
chapitreQuatre.to(".sec4-phrase05", {opacity: 0, duration: 2}, '<1')
chapitreQuatre.fromTo(".sec4-phrase04",{opacity: 0},{opacity: 1, duration: 1}, '<1')
chapitreQuatre.to(".sec4-phrase04", {opacity: 0, duration: 2}, '<1')
chapitreQuatre.to(".sec4-phrase03", {text: "Ce n'était pas toi..", duration: 0},'<')
chapitreQuatre.fromTo(".sec4-phrase03",{opacity: 0},{opacity: 1, duration: 1}, '<1')
chapitreQuatre.to(".sec4-phrase03", {opacity: 0, duration: 2}, '<1')
chapitreQuatre.to(".sec4-phrase04", {text: "Non...", duration: 0},'<')
chapitreQuatre.fromTo(".sec4-phrase04",{opacity: 0},{opacity: 1, duration: 1}, '<1')
chapitreQuatre.to(".sec4-phrase04", {opacity: 0, duration: 2}, '<1')
chapitreQuatre.fromTo(".sec4-phrase05",{opacity: 0},{opacity: 1, duration: 1}, '<1')
chapitreQuatre.to(".sec4-phrase05", {opacity: 0, duration: 2}, '<1')
chapitreQuatre.to(".yeux-oiseau", {opacity: 0, duration: 1},'<')
chapitreQuatre.to(".sec4-phrase04", {text: "AAAAAAAAAAA", duration: 0},'<1')
chapitreQuatre.to(".sec4-phrase03", {text: "AAAAAAAAAAAAA", duration: 0},'<')
chapitreQuatre.fromTo(".sec4-phrase04",{opacity: 0},{opacity: 1, duration: 1}, '<1')
chapitreQuatre.fromTo(".sec4-phrase03",{opacity: 0},{opacity: 1, duration: 1}, '<')
chapitreQuatre.to(".grotte-groupe, .sec4-phrase04, .sec4-phrase03", {x: '100vw', duration: 1},'<1')
chapitreQuatre.to(".sec4-phrase04, .sec4-phrase03, .grotte-groupe",{opacity: 0, duration: 0});
chapitreQuatre.to("#section4-grotte", {x: '-425vw', duration: 5},'<')
chapitreQuatre.fromTo(".spritesheet1", {opacity:0} ,{opacity: 1},'<1')


let chapitreCinq = gsap.timeline();
  chapitreCinq.to(".sec5-phrase01", {text: "Il ne leur restait qu'un chemin à prendre, mais lequel..", duration: 2}, 3)
  chapitreCinq.to(".sec5-phrase01", {text: '"Suivons cette enseigne", cria Lilo', duration: 2}, '<5')


// Section Six
let chapitreSix = gsap.timeline();
