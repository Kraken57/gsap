gsap.to("#box1", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "pink",
  borderRadius: "50%",

});

gsap.from("#box2", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  borderRadius: "50%",
  scale: 0.5,
});
