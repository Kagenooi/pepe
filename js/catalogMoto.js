import { adaptive } from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
window.addEventListener('resize', function () { adaptive() });
adaptive();

let buba = new Swiper('.catalog__el_slider', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: `.catalog__el_slider .catalog__el_slider_btns_btn.next`,
        prevEl: `.catalog__el_slider .catalog__el_slider_btns_btn.prev`,
    }
});
window.buba = buba;


const standartSlider2 = new Swiper("#standartSlider2", {
    spaceBetween: 10,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: "#standartSlider2 .slider__header_btns_btn.next",
        prevEl: "#standartSlider2 .slider__header_btns_btn.prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
    breakpoints: {
        1440: {
            spaceBetween: 40
        }
    }
});
window.standartSlider2 = standartSlider2;


const standartSlider3 = new Swiper("#standartSlider3", {
    spaceBetween: 10,
    slidesPerView: 2,
    loop: true,
    navigation: {
        nextEl: "#standartSlider3 .slider__header_btns_btn.next",
        prevEl: "#standartSlider3 .slider__header_btns_btn.prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
    breakpoints: {
        1440: {
            spaceBetween: 40
        },
        520: {
            slidesPerView: 3,
        }
    }
});
window.standartSlider3 = standartSlider3;

const navbarMobile = document.querySelector('.navbar__mobile_btns_menu');
navbarMobile?.addEventListener('click', function() {
    document.querySelector('.navbar__mobile_menu').classList.toggle('active');
})