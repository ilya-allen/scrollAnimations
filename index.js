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
const downArrow = document.querySelector('.down_arrow');
const textSection = document.querySelector('.text_section')
const lawImg = document.querySelectorAll('.law_img');
const textWrap = document.querySelector('.text_wrap')
const sliderThumb = document.querySelector('.slider')
const box = document.querySelector('.box')
let scrollVal = 0;

downButton.addEventListener('click', function() {
    window.scrollBy(0, (bodySection.getBoundingClientRect().top - 200))
    downButton.style.transform = 'translateX(-400%)'
    headerText.style.transform = 'translateX(-200%)'
    image.style.transform = 'translateX(200%)'
})

downArrow.addEventListener('click', function() {
    window.scrollBy(0, (textSection.getBoundingClientRect().top - 200))
    box.style.transform = `translateX(${0}%)`
    textWrap.style.transform = `translateX(${0}%)`

})

const slides = document.querySelectorAll('.image');
let curSlide = 0;

slides.forEach(function(val, slideNum) {
    val.style.transform = `translateX(${100 * (slideNum)}%)`
})

function createDots() {
    slides.forEach(function (val, slideNum) {
        slidesDiv.insertAdjacentHTML('beforeend', `<div class="dot" data-slide=${slideNum}></div>`)
    }) 
    document.querySelector(`.dot[data-slide="${0}"]`).classList.add('active');
}

createDots();


function activateDot(slide) {
    document.querySelectorAll('.dot').forEach(function(val, slideNum) {
        val.classList.remove('active')
        console.log(val)
    })

    document.querySelector(`.dot[data-slide="${slide}"]`).classList.add('active');
}

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
    activateDot(curSlide)
}

function prevSlide() {
    if (curSlide == 0) {
        curSlide = slides.length;
    }
    curSlide--;
    goToSlide(curSlide)
    activateDot(curSlide)
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

document.querySelectorAll('.dot').forEach(function(val, dotNum) {
    val.addEventListener('click', function(e) { 
        curSlide = val.dataset.slide
        goToSlide(curSlide)
        activateDot(curSlide)
    })
})

sliderThumb.addEventListener('input', function() {
    if (sliderThumb.value < 90 || sliderThumb.value > 110) {
        lawImg.forEach(function(val, index) {
            val.style.transform = `translateX(${sliderThumb.value * 1}%)`
            val.style.transition = '1ms ease-in-out'
        })
    } else if (sliderThumb.value > 180){
        lawImg.forEach(function(val, index) {
            val.style.transform = `translateX(${200}%)`
            val.style.transition = '1ms ease-in-out'
        })

    } else {
        lawImg.forEach(function(val, index) {
            val.style.transform = `translateX(${100}%)`
            val.style.transition = '1ms ease-in-out'
        })
    }


})