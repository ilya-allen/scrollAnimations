'use strict';

const image = document.querySelector('.sam');
const headerText = document.querySelector('.header_text')
const body = document.querySelector('body')
let scrollVal = 0;

window.addEventListener("wheel", function() {

    image.style.transform = `translateX(${200}%)`
    headerText.style.transform = `translateX(${-300}%)`
});
