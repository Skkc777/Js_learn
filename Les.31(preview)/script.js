"use strict";


// События и их обработчики

// 1 способ через html страницу onclick= " alert('Click')" прописывается непосредственно в html структуре

const btn = document.querySelectorAll('button'),
overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//       alert('Click');              // почти неиспользуется; в редких случаях
// };

// btn.addEventListener('click', () => {              // первый аргумент addEventListener click или 
//     alert('Click');               //другой keypad или прочее задает чем именно кликаешь и всегда маленькими буквами
// });


// btn.addEventListener('click', () => {              // следущее действие для кнопки порядок очереди
//     alert('эй ё че каво сучары');                        // задает второе действие клика
// });

// btn.addEventListener('mouseenter', (event) => {              // при наводе мыши выводит 
//     console.log('эй ё че каво сучары');        //значение функции ппц прикольно задает третье  действие клика
// });

// btn.addEventListener('click', (event) => {     // mouseenter при наводе мыши выводит значение функции ппц прикольно
//     console.log('event.target');   
//     event.target.style.cssText = 'background-color: red;';
// });

// let i = 0;

// const consoleVivod = (e) => {
//     console.log('click clack clank');
//     i++;
//     if (i = 1) {
//         btn.removeEventListener('click', consoleVivod);
//     }
// };

 const consoleVivod = (e) => {
     console.log(e.target);
  //   console.log(e.currentTarget); //показывает какие элементы были задейстованы

     console.log(e.type);
};

// btn.addEventListener('click', consoleVivod); 
// overlay.addEventListener('click', consoleVivod); 

// всплытие событий это когда всплытие происходит сначала на самом 
 //                                      вложенном элементе, затем на родительский элемент и тд вверх 


// ------- отмена каких-то элементов на странице то есть копирования и прочего прочего

const link = document.querySelector('a');

link.addEventListener('click', function(event){
    event.preventDefault(); // отмена действия с ссылкой на странице, то есть сейчас при клике на нее 
                 //  произойдет другое действие а именно вывод в консоль таргет элемента где он находится
    console.log(event.target);   
});


// способ для псевдомассива и выполнение события 

btn.forEach((btn) => {      // обьявил функцию для всех кнопок сразу с выводом в консоль через переменную consoleVivod
    btn.addEventListener('click', consoleVivod, {once: true}); //once: true сработать один раз и подтверждение;
});







































