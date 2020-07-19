'use strict';

//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', (event) => {

    const box = document.querySelector('.box');


    box.addEventListener('touchstart', (e) => {
        e.preventDefault();

        console.log('start');
        console.log(e.targetTouches); 
        // console.log(e.touches); // количество пальцев задействованных на тачпаде
    });

    box.addEventListener('touchmove', (e) => {
        e.preventDefault();

        console.log(e.targetTouches[0].pageX);

    });

    // box.addEventListener('touchend', (e) => {
    //     e.preventDefault();

    //     console.log('Endtouch');

    // });
});

// для начала можно использовать hummerjs
//touches  количество пальцев задействованных на тачпаде
// targetTouches количество пальцев задействованных с определенным элементом
//changedTouches количество пальцев задействованных в данный момент в каком то событии