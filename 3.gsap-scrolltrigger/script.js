gsap.from("#page1 #box", {
  scale : 0,
  duration: 2,
  delay : 1,
  rotation: 360,
  borderRadius: "50%",
});


gsap.from("#page2 #box", {
  scale : 0,
  duration: 2,
  rotation: 720,
  // scrollTrigger: "#page2 #box",
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",
    markers: true,
    start: "top 60%",
    end: "top 30%",
    scrub: 2,
    pin: true,
  }
});
