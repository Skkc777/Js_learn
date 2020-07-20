'use strict';


const btns = document.querySelectorAll('button'),
     wrapper = document.querySelector('#first');

// console.log(btns[0].classList.length);

//console.log(btns[0].classList.item(0)); //значения класса показывает количество элементов в классе class=blue some (2 значения)

// console.log(btns[0].classList.add('red', 'Sexy'));//можно создать два названия класса
// console.log(btns[1].classList.add('red'));

// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue')); // добавляет или удаляет название в классе

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }

btns[0].addEventListener('click', () => {

        // if (!btns[1].classList.contains('red')) {
            
        //     btns[1].classList.add('red');
        // } else {
        //     btns[1].classList.remove('red');
        // }
        btns[1].classList.toggle('red');
});


//  устаревшая методика ↓↓↓↓

// console.log(btns[0].className); // выводит данные ввиде строки

// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log("hi");
//     }
// });

wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches('button.red')) {
        console.log("hi");
    }
});


// btns.forEach(btn => {
//   btn.addEventListener('click', () => {
//       console.log('hi hi hi');
//   });
// });

const btn = document.createElement('button');
btn.classList.add('fuck');
wrapper.append(btn);
btn.textContent = `9`;



