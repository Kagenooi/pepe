import { adaptive } from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
window.addEventListener('resize', function () { adaptive() });
adaptive();

const btns = document.querySelectorAll('.container__info_title');
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function() {
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