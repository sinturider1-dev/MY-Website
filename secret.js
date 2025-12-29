const music = document.getElementById("secretMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸ Pause Music";
  } else {
    music.pause();
    musicBtn.textContent = "▶ Play Music";
  }
});
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach(slide => {
    slide.classList.remove("active");
    if (slide.tagName === "VIDEO") {
      slide.pause(); // video stop jab switch ho
    }
  });

  slides[index].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}
