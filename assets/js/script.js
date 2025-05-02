// Show popup on page load and blur background
window.addEventListener('load', () => {
  document.getElementById('popup').classList.remove('hidden');
  document.getElementById('pageContent').classList.add('blur-sm');
});

// Close popup and remove blur
document.getElementById('popupClose').addEventListener('click', () => {
  document.getElementById('popup').style.display = "none";
  document.getElementById('pageContent').classList.remove('blur-sm');
});

// Toggle search bar
const search = document.getElementById("search");
const searchbar = document.getElementById("searchbar");
const closes = document.getElementById("close");

search.addEventListener("click", () => {
  searchbar.style.display = "block";
});

closes.addEventListener("click", () => {
  searchbar.style.display = "none";
});

// Toggle product dropdown menu
const product = document.getElementById("product");
const productmenu = document.getElementById("product-menu");
const dropicon = document.getElementById("drop-icon");

product.addEventListener("click", () => {
  const isOpen = productmenu.style.display === "block";
  productmenu.style.display = isOpen ? "none" : "block";
  dropicon.style.rotate = isOpen ? "0deg" : "180deg";
});

// Toggle navbar
const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  const isVisible = navbar.style.display === "block";
  navbar.style.display = isVisible ? "none" : "block";
});


document.addEventListener("DOMContentLoaded", () => {
  // Banner Swiper
  new Swiper(".banner-slide", {
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    spaceBetween: 30,
  });

  // General Slider
  new Swiper(".swiper-slider-3", {
    centeredSlides: true,
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
  
    keyboard: {
      enabled: true,
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

  // Shop By System Swiper
  new Swiper('.shop-by-system-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 48,
    breakpoints: {
      320: { slidesPerView: 1 },
      660: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 3 },
    },
  });

  // Shop By Case Swiper
  new Swiper('.Shop-By-Case-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 18,
    breakpoints: {
      320: { slidesPerView: 1 },
      660: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
      1280: { slidesPerView: 4 },
    },
  });

  // Testimonials Swiper
  new Swiper('.Testimonials-swiper', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    spaceBetween: 30,
    breakpoints: {
      320: { slidesPerView: 1 },
      660: { slidesPerView: 1.5 },
      1024: { slidesPerView: 2 },
      1280: { slidesPerView: 3 },
    },
  });
});
