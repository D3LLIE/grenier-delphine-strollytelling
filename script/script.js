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

  gsap
  .timeline()
  .to(".para00",{x:"-40%",duration:18,ease:'none'},'<')
  .to(".para04",{y:"2%", yoyo: true, repeat: 40, duration:0.5 ,ease:'none'},'<')
  .to(".para01",{x:"-40%",duration:17,ease:'none'},'<')
  .to(".para02",{x:"-40%",duration:16,ease:'none'},'<')
  .to(".para03",{x:"-40%",duration:14,ease:'none'},'<')
  .to(".para05",{x:"-40%",duration:12,ease:'none'},'<')
  .to(".para04",{x:"200%",duration:10 ,ease:'none'}, 12)
