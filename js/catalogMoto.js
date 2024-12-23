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