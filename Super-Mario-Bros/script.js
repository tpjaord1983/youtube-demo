let numfireworks = 20; 
let width = window.innerWidth; 
let height = window.innerHeight; 

function createfirework() {
  let firework = document.createElement("div"); 
  let fireworkClass = "firework firework" + gsap.utils.random(1, 4, 1); 
  firework.setAttribute("class", fireworkClass); 
  document.body.appendChild(firework); 
  return firework; 
}

function animatefirework(firework) {
  let scaleFactor = Power3.easeIn(Math.random()); 
  let scale = gsap.utils.interpolate(0.3, 2, scaleFactor); 
  let duration = gsap.utils.interpolate(2, 4, 1 - scaleFactor); 
  let opacity = gsap.utils.interpolate(0.5, 1, scaleFactor); 

  gsap.set(firework, { 
    y: gsap.utils.random(0, height), 
    x: gsap.utils.random(0, width), 
    scale: 0, 
    opacity: opacity 
  });

  gsap.to(firework, { 
    duration: 0.75, 
    delay: "random(0,4)", 
    ease: "none", 
    scale: scale, 
    onComplete: animatefirework, 
    onCompleteParams: [firework] 
  });
}

for (let i = 0; i < numfireworks; i++) {
  let firework = createfirework(); 
  animatefirework(firework); 
}

document.addEventListener("click", () =>
gsap.globalTimeline.paused(!gsap.globalTimeline.paused())
);