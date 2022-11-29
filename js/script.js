let tl = gsap
  .timeline()
  .from(".hero__left", { opacity: 0, y: 50, duration: 1 })
  .from(".hero__descr, .img1", { opacity: 0, y: 20, duration: 0.5 })
  .from(".img2", { opacity: 0, y: 20, duration: 0.5 })
  .from(".img3, .photos__author", { opacity: 0, y: 20, duration: 0.5 });

let open = document.querySelector(".burger");
let close = document.querySelector(".close");

tl = gsap.timeline({ paused: true });

tl.fromTo(".menu", { display: "none" }, { display: "block" })
  .from(".menu__top", { opacity: 0, y: -150, duration: 0.5 })
  .from(".menu__container", { opacity: 0, y: 20, duration: 0.5 })
  .from(".menu__right, .social", { opacity: 0, y: 20, duration: 0.5 });

open.onclick = function () {
  tl.play();
};

close.onclick = function () {
  tl.reverse();
};
