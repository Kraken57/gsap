gsap.to("#page2 h1", {
  transform: "translateX(-150%)",
  scrollTrigger: {
    trigger: "#page2", //jb pin use krte h to parent ko trigger krna hota h
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "top -50%",
    scrub: 2,
    pin: true,
  },
});
