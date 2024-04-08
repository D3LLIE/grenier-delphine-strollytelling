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
