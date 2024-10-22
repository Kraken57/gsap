gsap.to("#box1", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "pink",
  borderRadius: "50%",
  repeat: -1,
  yoyo: true,
});

gsap.from("#box2", {
  x: 1200,
  duration: 2,
  delay: 1,
  rotate: 360,
  borderRadius: "50%",
  scale: 0.5,
  repeat: -1, //for infinite repeat
  yoyo: true, //for reverse animation
});

gsap.from("h1", {
  opacity: 0,
  color: "yellow",
  y: 30,
  duration: 2,
  delay: 1,
  stagger: 0.3,  // negative value will make the animation start opposite direction
});
