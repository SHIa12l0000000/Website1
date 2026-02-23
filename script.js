document.addEventListener("DOMContentLoaded", function () {
  const heroCarousel = document.querySelector("#heroCarousel");

  if (heroCarousel) {
    // Initialize Bootstrap Carousel
    const carousel = bootstrap.Carousel.getOrCreateInstance(heroCarousel, {
      interval: 5000,  // 5 seconds per slide
      pause: false,    // do not pause on hover
      wrap: true       // loop slides
    });
  }
});
