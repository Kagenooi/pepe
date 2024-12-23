import { adaptive } from "../adaptiveMode/adaptive.js";
window.adaptive = adaptive;
window.addEventListener('resize', function () { adaptive() });
adaptive();

const navbarMobile = document.querySelector('.navbar__mobile_btns_menu');
navbarMobile?.addEventListener('click', function() {
    document.querySelector('.navbar__mobile_menu').classList.toggle('active');
})
const navbarMobileClose = document.querySelector('.navbar__mobile_menu_header_closeBtn');
navbarMobileClose?.addEventListener('click', function() {
    document.querySelector('.navbar__mobile_menu').classList.toggle('active');
})


let accBtns = document.querySelectorAll('.faq__item_btn');
for (let i = 0; i < accBtns.length; i++) {
    accBtns[i].addEventListener('click', function() {
        if (this.nextElementSibling.style.maxHeight) {
            this.nextElementSibling.style.maxHeight = null;
            this.querySelector('.faq__item_btn_icon').classList.remove('active');
        } else {
            this.querySelector('.faq__item_btn_icon').classList.add('active');
            this.nextElementSibling.style.maxHeight = this.nextElementSibling.style.maxHeight + this.nextElementSibling.scrollHeight + 'px';
        }
    })
}