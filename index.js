'use strict';

history.scrollRestoration = 'manual';
const image = document.querySelector('.sam');
const headerText = document.querySelector('.header_text')
const downButton = document.querySelector('.down_button')
const body = document.querySelector('body')
const bodySection = document.querySelector('.body_section')
let scrollVal = 0;

downButton.addEventListener('click', function() {
    bodySection.scrollIntoView();
    downButton.style.transform = 'translateX(-400%)'
    headerText.style.transform = 'translateX(-200%)'
    image.style.transform = 'translateX(200%)'
})