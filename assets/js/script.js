let search = document.getElementById("search");
let searchbar = document.getElementById("searchbar");
let closes = document.getElementById("close");

search.addEventListener("click", function () {
  searchbar.style.display = "block";
});
closes.addEventListener("click", function () {
  searchbar.style.display = "none";
});

let product = document.getElementById("product");
let productmenu = document.getElementById("product-menu");
let dropicon = document.getElementById("drop-icon");

product.addEventListener("click", function () {
  productmenu.style.display =
    productmenu.style.display === "block" ? "none" : "block";
  dropicon.style.rotate =
    productmenu.style.display === "block" ? "180deg" : "0deg";
});

let toggle = document.getElementById("toggle");
let navbar = document.getElementById("navbar");

toggle.addEventListener("click", function () {
  navbar.style.display = navbar.style.display === "block" ? "none" : "block";
});

document.addEventListener("DOMContentLoaded", function () {
  const bannerSwiper = new Swiper(".banner-slide", {
    loop: true,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: false,
      clickable: true,
    },
    spaceBetween: 30,
  });

  const swiper = new Swiper(".swiper-slider-3", {
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
      enabled: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1.25,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });

  const shopBySystemSwiper = new Swiper('.shop-by-system-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 48,
    breakpoints: {
      320: { slidesPerView: 1 },
      660: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 3 },
    },
  })

  const ShopByCaseSwiper = new Swiper('.Shop-By-Case-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 18,
    breakpoints: {
      320: { slidesPerView: 1 },
      660: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
  })

  const TestimonialsSwiper = new Swiper('.Testimonials-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    breakpoints: {
      320: { slidesPerView: 1 },
      660: { slidesPerView: 2.5 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 3 },
    },
  })

});
