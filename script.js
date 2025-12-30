console.log("JS Loaded ✅");

/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const revealItems = document.querySelectorAll(
  ".schedule-box, .feature-box, .gallery-grid img, .about, .contact form"
);

const revealOnScroll = () => {
  const trigger = window.innerHeight * 0.85;

  revealItems.forEach(item => {
    const top = item.getBoundingClientRect().top;
    if (top < trigger) {
      item.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* =========================
   NAVBAR SCROLL EFFECT
========================= */
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 60);
});

/* =========================
   HERO IMAGE FLOATING
========================= */
const heroImg = document.querySelector(".hero img");

if (heroImg) {
  let pos = 0;
  let dir = 1;

  setInterval(() => {
    pos += dir * 0.3;
    if (pos > 12 || pos < -12) dir *= -1;
    heroImg.style.transform = `translateY(${pos}px)`;
  }, 30);
}

/* =========================
   PRICE COUNT ANIMATION
========================= */
// const price = document.querySelector(".price-tag");

// if (price) {
//   let count = 0;
//   const target = 199;
//   const speed = 5;

//   const counter = setInterval(() => {
//     count += speed;
//     if (count >= target) {
//       count = target;
//       clearInterval(counter);
//     }
//     price.innerText = `$${count}`;
//   }, 20);
// }

/* =========================
   VIDEO AUTOPLAY ON VIEW
========================= */
const video = document.querySelector(".video-section video");

if (video) {
  video.muted = true;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        entry.isIntersecting ? video.play() : video.pause();
      });
    },
    { threshold: 0.6 }
  );

  observer.observe(video);
}

/* =========================
   CURSOR GLOW EFFECT
========================= */
const cursor = document.createElement("div");
cursor.classList.add("cursor-glow");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
