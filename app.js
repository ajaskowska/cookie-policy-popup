let tl = gsap.timeline({ defaults: { duration: 0.7, ease: "power2.out" } });
tl.fromTo(
  ".cookie-container",
  { scale: 0 },
  { scale: 1, ease: "elastic.out(1, 0.4)" }
);
tl.fromTo(
  ".cookie",
  { opacity: 0, x: -50, rotation: "-45deg" },
  { opacity: 1, x: 0, rotation: "0deg" },
  "<50%"
);
tl.fromTo(".text", { x: 50, opacity: 0 }, { x: 0, opacity: 1 }, "<");
let btn = document.querySelector("button");
btn.addEventListener("click", () => {
  tl.to(".cookie-container", {
    opacity: 0,
    y: 100,
    duration: 0.75,
    ease: "power2.out",
  });
});
