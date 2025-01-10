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
navbarMobile?.addEventListener('click', function () {
    document.querySelector('.navbar__mobile_menu').classList.toggle('active');
})
const navbarMobileClose = document.querySelector('.navbar__mobile_menu_header_closeBtn');
navbarMobileClose?.addEventListener('click', function () {
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