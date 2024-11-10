import { adaptive } from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
window.addEventListener('resize', function () { adaptive() });
adaptive();


const selectBtn = document.querySelectorAll('.selectBtn');
const selectDropdown = document.querySelectorAll('.selectDropdown');
const selectcontent = document.querySelectorAll('.selectWrapper');
for (let i = 0; i < selectBtn.length; i++) {
    selectBtn[i].addEventListener('click', function () {
        if (selectDropdown[i].style.maxHeight) {
            selectDropdown[i].style.maxHeight = null;
        } else {
            selectDropdown[i].style.maxHeight = selectDropdown[i].style.maxHeight + selectDropdown[i].scrollHeight + 'px';
        }
        for (let x = 0; x < selectcontent.length; x++) {
            selectcontent[i].classList.remove('active');
        }
        this.closest('.selectWrapper').classList.toggle('active');
        this.classList.toggle('active');
    })
}
const selectWrapper = document.querySelectorAll('.selectWrapper');
document.addEventListener('click', (e) => {
    for (let i = 0; i < selectWrapper.length; i++) {
        let closeAllSelect = e.composedPath().includes(selectWrapper[i]);
        if (!closeAllSelect) {
            selectDropdown[i].style.maxHeight = null;
            selectcontent[i].classList.remove('active');
            selectBtn[i].classList.remove('active');
        }
    }
})


const filterBtn = document.querySelector('.filter__openBtn');
const filterWrapper = document.querySelector('.filter__content');
filterBtn.addEventListener('click', function () {
    if (filterWrapper.style.maxHeight) {
        filterWrapper.style.maxHeight = null;
        filterWrapper.classList.remove('active');
        document.querySelector('.filter__content').style.overflow = 'hidden';
    } else {
        filterWrapper.classList.add('active');
        document.querySelector('.filter__content').style.overflow = 'visible';
        filterWrapper.style.maxHeight = filterWrapper.style.maxHeight + filterWrapper.scrollHeight + 'px';
    }
})


let buba = new Swiper('.catalog__el_slider', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: `.catalog__el_slider .catalog__el_slider_btns_btn.next`,
        prevEl: `.catalog__el_slider .catalog__el_slider_btns_btn.prev`,
    }
});
window.buba = buba;


const standartSlider3 = new Swiper("#standartSlider3", {
    spaceBetween: 10,
    slidesPerView: 2,
    loop: true,
    navigation: {
        nextEl: "#standartSlider3 .next",
        prevEl: "#standartSlider3 .prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
    breakpoints: {
        1440: {
            spaceBetween: 40,
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
const navbarMobileClose = document.querySelector('.navbar__mobile_menu_header_closeBtn');
navbarMobile?.addEventListener('click', function() {
    document.querySelector('.navbar__mobile_menu').classList.toggle('active');
})