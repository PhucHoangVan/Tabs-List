
// JavaScript 
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.tab-item');
const parts = $$('.tab-part');


const tabActive = $('.tab-item.active');
const line = $('.tab-line');

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
    const part = parts[index];

    tab.onclick = function () {
        $('.tab-item.active').classList.remove('active');
        $('.tab-part.active').classList.remove('active');

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add('active');
        part.classList.add('active');
    }
})
