gsap.from(
    ".KeyboardPage > H2, p, iframe",
    2,
    {
      y: "500",
      opacity: 0,
      ease: Expo.easeInOut,
      delay: 1,
      stagger: 0.08,
    }
  );

  gsap.from(".github-link, .ig-link, .linkedin-link", 1, {
    scale: 0,
    ease: Elastic.easeOut,
    delay: 3,
    stagger: 0.50,
  });