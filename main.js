var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // breakpoints:{
  //   320:{
  //     slidesPerView: 1
  //   },
  //   768:{
  //     slidesPerView: 2
  //   },
  //   1024:{
  //     slidesPerView: 3
  //   }
  // } //это закоментировал, потому что все ломается в верстке, но так будут брейкпоинты указываться
});