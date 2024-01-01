'use strict';

history.scrollRestoration = 'manual';
const image = document.querySelector('.sam');
const headerText = document.querySelector('.header_text')
const body = document.querySelector('body')
let scrollVal = 0;

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
}

window.onwheel = e => {
    
    if(e.deltaY >= 0){

        scrollVal += 50;
        image.style.transform = `translateX(${scrollVal}%)`
        headerText.style.transform = `translateX(-${scrollVal}%)`
    } else {
        if(window.scrollY > 0) {
            console.log(e.deltaY)
            console.log(body.offsetTop)
            scrollVal -= 50;
            image.style.transform = `translateX(${scrollVal}%)`
            headerText.style.transform = `translateX(-${scrollVal}%)`
        }
    }
}