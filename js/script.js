document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".slider");
  const slides = document.querySelectorAll(".slide");

  let currentIndex = 0;

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  }

  function updateSlider() {
    const translateValue = -currentIndex * 100 + "%";
    slider.style.transform = "translateX(" + translateValue + ")";
  }

  setInterval(nextSlide, 3000); // Change slide every 3 seconds (adjust as needed)
});
