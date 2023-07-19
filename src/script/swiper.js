const swiper = new Swiper(".slider", {
  allowTouchMove: false,
  on: {
    slideChange: function () {
      let activeSlide = this.activeIndex,
        totalSlides = this.slides.length + 1;
    }
  }
});
const nextSlideButtons = document.querySelectorAll('.next-slide-button');

nextSlideButtons.forEach(button=>{
  button.addEventListener('click', async function (event) {
    event.preventDefault();
    swiper.slideNext();
  });

})