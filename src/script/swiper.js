const swiper = new Swiper(".slider", {
  allowTouchMove: true,
  on: {
    slideChange: function () {
      let activeSlide = this.activeIndex,
        totalSlides = this.slides.length + 1;
    }
  }
});