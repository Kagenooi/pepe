import { adaptive } from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
window.addEventListener('resize', function () { adaptive() });
adaptive();

const marksSwiper = new Swiper("#marksSwiper", {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".header__marks_slider_btns_btn.next",
        prevEl: ".header__marks_slider_btns_btn.prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
    breakpoints: {
        520: {
            slidesPerView: 3,
        }
    }
});
window.marksSwiper = marksSwiper;

const standartSlider = new Swiper("#standartSlider", {
    spaceBetween: 10,
    slidesPerView: 2,
    loop: true,
    navigation: {
        nextEl: "#standartSlider .slider__header_btns_btn.next",
        prevEl: "#standartSlider .slider__header_btns_btn.prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        dynamicMainBullets: 3,
    },
    breakpoints: {
        1440: {
            spaceBetween: 10,
            slidesPerView: 3,
        },
        520: {
            slidesPerView: 3,
        }
    }
});
window.standartSlider = standartSlider;

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
            slidesPerView: 3,
            spaceBetween: 40
        },
        520: {
            slidesPerView: 3,
        }
    }
});
window.standartSlider3 = standartSlider3;

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


const footerBtns = document.querySelectorAll('.footer__list_el_header');
for (let i = 0; i < footerBtns.length; i++) {
    footerBtns[i].addEventListener('click', function() {
        if (this.nextElementSibling.style.maxHeight) {
            this.nextElementSibling.style.maxHeight = null;
        } else {
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.style.maxHeight + this.nextElementSibling.scrollHeight + 'px';
        }
    })
}


const navbarMobile = document.querySelector('.navbar__mobile_btns_menu');
navbarMobile?.addEventListener('click', function() {
    document.querySelector('.navbar__mobile_menu').classList.toggle('active');
})
const navbarMobileClose = document.querySelector('.navbar__mobile_menu_header_closeBtn');
navbarMobileClose?.addEventListener('click', function() {
    document.querySelector('.navbar__mobile_menu').classList.toggle('active');
})






// Находим все выпадающие списки
const selectDropdowns = document.querySelectorAll('.filter__items_select_dropdown');

// Проходим по каждому выпадающему списку
selectDropdowns.forEach(dropdown => {
    const searchInput = dropdown.querySelector('.filter__items_select_search_inp'); // Инпут для поиска
    const buttons = dropdown.querySelectorAll('.filter__items_select_dropdown_btn'); // Пункты списка

    // Добавляем обработчик ввода на поле поиска
    searchInput.addEventListener('input', () => {
        const searchValue = searchInput.value.toLowerCase(); // Приводим текст к нижнему регистру

        // Если поле поиска пустое, показываем все элементы
        if (!searchValue) {
            buttons.forEach(button => {
                button.style.display = 'block';
            });
            return;
        }

        // Проходим по кнопкам и показываем только те, которые начинаются с введённого текста
        buttons.forEach(button => {
            const text = button.textContent.toLowerCase(); // Текст пункта в нижнем регистре
            if (text.startsWith(searchValue)) {
                button.style.display = 'block'; // Показываем, если текст начинается с введённого
            } else {
                button.style.display = 'none'; // Скрываем, если текст не совпадает
            }
        });
    });
});



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