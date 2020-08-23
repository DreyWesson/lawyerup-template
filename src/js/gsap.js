gsap.registerPlugin(ScrollTrigger);
const toggler = document.querySelector(".navbar-toggler-icon");
const tl = new TimelineMax({ paused: true, reversed: true });
const tl2 = new TimelineMax();
if (window.innerWidth <= 991) {
  toggler.addEventListener("click", (_) => {
    tl.from(".nav-item", {
      duration: 1,
      x: -50,
      opacity: 0,
      stagger: 0.1,
      ease: "back",
    });
    tl.reversed() ? tl.play() : tl.reversed();
  });
}
gsap.from(".hero", { duration: 2, x: -500, opacity: 0, ease: "back" });
tl2
  .from(".ScrollFromTop", {
    scrollTrigger: {
      trigger: ".ScrollFromTop",
    },
    duration: 2,
    y: -100,
    opacity: 0,
  })
  .from(
    ".ScrollFromLeft",
    {
      scrollTrigger: {
        trigger: ".ScrollFromLeft",
      },
      duration: 1,
      x: -500,
      opacity: 0,
    },
    "-=1"
  );
gsap.from(".ScrollFromRight", {
  scrollTrigger: {
    trigger: ".ScrollFromRight",
  },
  duration: 1,
  x: 700,
  opacity: 0,
});
gsap.from(".fadeIn", {
  scrollTrigger: {
    trigger: ".fadeIn",
  },
  duration: 2,
  opacity: 0,
});
gsap.from(".fadeIn2", {
  scrollTrigger: {
    trigger: ".fadeIn2",
  },
  duration: 2,
  opacity: 0,
});

gsap.from(".firstrow", {
  scrollTrigger: {
    trigger: ".firstrow",
  },
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: 0.1,
  ease: "back",
});

gsap.from(".secondrow", {
  scrollTrigger: {
    trigger: ".secondrow",
  },
  duration: 1,
  y: 100,
  opacity: 0,
  stagger: 0.1,
  ease: "back",
});

gsap.from(".contact-mail", {
  scrollTrigger: {
    trigger: ".contact-mail",
    start: "top center",
  },
  duration: 1,
  x: -500,
  opacity: 0,
});
gsap.from(".contact-address", {
  scrollTrigger: {
    trigger: ".contact-address",
    start: "top center",
  },
  duration: 1,
  x: 500,
  opacity: 0,
});
