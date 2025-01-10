import { adaptive } from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
window.addEventListener('resize', function () { adaptive() });
adaptive();
const navbarMobile = document.querySelector('.navbar__mobile_btns_menu');
navbarMobile?.addEventListener('click', function () {
    document.querySelector('.navbar__mobile_menu').classList.toggle('active');
})
const navbarMobileClose = document.querySelector('.navbar__mobile_menu_header_closeBtn');
navbarMobileClose?.addEventListener('click', function () {
    document.querySelector('.navbar__mobile_menu').classList.toggle('active');
})


const swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    slidesPerView: 3,
    freeMode: true,
    watchSlidesProgress: true,
    breakpoints: {
        // when window width is >= 640px
        520: {
            slidesPerView: 4,
            spaceBetween: 10,
        }
    }
});
const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 10,
    loop: true,
    navigation: {
        nextEl: ".productWrapper__gallery_btns_btn.next",
        prevEl: ".productWrapper__gallery_btns_btn.prev",
    },
    thumbs: {
        swiper: swiper,
    },
});


let buba = new Swiper('.catalog__el_slider', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: `.catalog__el_slider .catalog__el_slider_btns_btn.next`,
        prevEl: `.catalog__el_slider .catalog__el_slider_btns_btn.prev`,
    }
});
window.buba = buba;


// add wishtlist 

const favBtns = document.querySelectorAll('.slider__el_addWishlist');
for (let i = 0; i < favBtns.length; i++) {
    favBtns[i].addEventListener('click', function() {
        this.querySelector('.favorit').classList.toggle('active');
        this.querySelector('.slider__el_addWishlist_icon').classList.toggle('active');
    })
}


const selectWrapperHidden = document.querySelectorAll('.selectWrapper');
for (let i = 0; i < selectWrapperHidden.length; i++) {
    let selectDropdown = selectWrapperHidden[i].querySelector('.selectDropdown')
    let filterBtn = selectDropdown.querySelectorAll('.filter__items_select_dropdown_btn');
    let hidden = selectDropdown.querySelector('.selectDropdownHidden');

    for (let x = 0; x < filterBtn.length; x++) {
        filterBtn[x].addEventListener('click', function() {
            hidden.value = this.dataset.value;
            selectDropdown.style.maxHeight = null;
            selectWrapperHidden[i].querySelector('.selectBtn').classList.remove('active');
            selectWrapperHidden[i].querySelector('.filter__items_select_btn_txt').innerHTML = this.innerHTML;
        })
    }
}