var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

  });


  let menu = document.querySelector(".menu_icon");
  let navbar = document.querySelector(".navbar");

  menu.onclick = () => {
    menu.classList.toggle("move");
    navbar.classList.toggle ("open_menu");
  };


  window.onscroll = () => {
    menu.classList.remove("move");
    navbar.classList.remove ("open_menu");
  };

const animate = ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration:'2500',
  delay:'400',
});

animate.reveal('.nav');
animate.reveal('.home_text', {origin: "left"});
animate.reveal('.home_img', {origin: "bottom"});
animate.reveal('.product_box ,.team_box ,.book_data', {interval: 100});