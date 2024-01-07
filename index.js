'use strict';

history.scrollRestoration = 'manual';
const image = document.querySelector('.sam');
const headerText = document.querySelector('.header_text')
const downButton = document.querySelector('.down_button')
const body = document.querySelector('body')
const bodySection = document.querySelector('.body_section')
const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');
const slidesDiv = document.querySelector('.slides_container')
let scrollVal = 0;

downButton.addEventListener('click', function() {
    bodySection.scrollIntoView();
    downButton.style.transform = 'translateX(-400%)'
    headerText.style.transform = 'translateX(-200%)'
    image.style.transform = 'translateX(200%)'
})

const slides = document.querySelectorAll('.image');
let curSlide = 0;

slides.forEach(function(val, slideNum) {
    val.style.transform = `translateX(${100 * (slideNum)}%)`
})

slides.forEach(function (val, slideNum) {
    slidesDiv.insertAdjacentHTML('beforeend', '<div class="dot"></div>')
})

const goToSlide = function(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i-slide)}%)`)
}

function nextSlide() {

    console.log(curSlide)
    if (curSlide == slides.length - 1) {
        curSlide = -1;
    }
    curSlide++;
    goToSlide(curSlide)
}

function prevSlide() {
    if (curSlide == 0) {
        curSlide = slides.length;
    }
    curSlide--;
    goToSlide(curSlide)
}


document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
})

rightArrow.addEventListener('click', nextSlide)

leftArrow.addEventListener('click', prevSlide)