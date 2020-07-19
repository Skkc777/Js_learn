"use strict";

//----------------------------------------------- LESSON 28 ------------------------------------------------------------------

// Получение элементов со страницы (Обьектная модель документа)
// Document object model(DOM)

// const box = document.getElementById('box'); //запрос на поиск id тега для работы с ним;

// console.log(box);

// // const btns = document.getElementsByTagName('button')[1]; // получение количество кнопок и обращение к кнопке 2;

// // console.log(btns);

// // const btns = document.getElementsByTagName('button');

// // console.log(btns);     //обращение к кнопка за счет переменной, обращение происходит за счет псевдомассива [0,1,2,3,4];

// const circle = document.getElementsByClassName('circle');

// console.log(circle);


// const hearts = document.querySelectorAll('.heart'); // употребление точки или через id как в css

// // console.log(hearts);

// hearts.forEach(item => {
//     console.log(item);
// });

// const oneHeart = document.querySelector('.heart'); // получает первый элемент по названию класса или айди 
// console.log(oneHeart);

// const oneHear = document.querySelector('#box');
// console.log(oneHear);

//----------------------------------------------- LESSON 28 END ----------------------------------------------------------------



//----------------------------------------------- LESSON 29  ----------------------------------------------------------------

                                       // Действия с элементами страницы


const box = document.getElementById('box'),
btns = document.getElementsByTagName('button'),
wrapper = document.querySelector('.wrapper'),
circle = document.getElementsByClassName('circle'),
hearts = wrapper.querySelectorAll('.heart'); //используем селектор wrapper вместо document
// oneHeart = document.querySelector('.heart'),


//  console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';       // инлайн стили(которые непосредственно прописаны в теге являются приоритетными);

box.style.cssText = 'background-color: blue; width: 500px';

//box.style.cssText = `background-color: blue; width: ${num}px`; //можно использовать какой то размер переменной с ``

btns[1].style.borderRadius = '100%';
circle[0].style.backgroundColor = 'red';



// for (let i = 0; i < hearts.length; i++) {                      // цикличный перебор элементов(почти не используется)
//     hearts[i].style.backgroundColor = 'blue';                 // перебор элементов псевдомассива [i];
// }


hearts.forEach(item => {                          //более правильный способ через метод forEach;
    item.style.backgroundColor = 'blue';
});


const div = document.createElement('div');  // создание псевдоэлемента, который существует только внутри js-файла;
// const text = document.createTextNode('I was be here'); // текстовая форма для добавления на страницу

div.classList.add('black');   // создаю класс для блока <div class="black">

// document.body.append(div); // добавляет элемент(блок div с классом black) на страницу

// document.querySelector('.wrapper').append(div); // создание элемента(блока div) внутри класса wrapper 

// wrapper.append(div); // вынес в переменную класс wrapper и воспользовался (ставит блок вконце класса!)
//                                              // методом для помещения элемента(блока div) внутри класса wrapper 

// wrapper.prepend(div); // ставит класс div вначале класса wrapper !

// еще метод для перемещения блоков или тегов :

//hearts[0].before(div); // установка перед блоком(псевдомассивом) hearts блока black

//hearts[0].after(div);   // ставит блок после какого-то указанного в значении элемента

//circle[0].remove();  // удаляет элемент псевдомассива со страницы DOM 

//hearts[0].replaceWith(circle[0]); // заменяет элемент на другой circle заменяет hearts;


// Старые методы которые можно встретить на странице:

// wrapper.appendChild(div); // старые методы 

//wrapper.insertBefore(div, hearts[1]); // старый метод в котором указывается два аргумента первый что вставляем и
                                          // куда именно поместить блок

// метод удаления устаревший

// wrapper.removeChild(hearts[1]); // удаление блока со страницы

// метод замены устаревший

//wrapper.replaceChild(circle[0], hearts[0]); // заменяем hearts на circle;

//----------------------------------

wrapper.append(div);

//div.innerHTML = 'Hello World'; // помещает во внутрь созданного div текстовую структуру  ВАЖНО ТОЛЬКО ДЛЯ РАЗРАБОТЧИКА САЙТА!
div.innerHTML = '<h1>Hello World</h1>'; // создание также полной структуры html с применением тегов;

// div.textContent = 'Hello';  // работает только с текстом без применения тегов! подходит для Клиентов!

div.insertAdjacentHTML('afterbegin','<h2>ADD</h2>');

//beforebegin - помещает тег перед используемым блоком, а точнее щас перед блоком Black!
//afterbegin - помещает вначале тег перед всеми используемыми тегами ! щас используется <h2>ADD</h2> ,а потом
                                                 // уже <h1>Hello World</h1>!!!!
//beforeend - помещает тег перед концом используемого блока
//afterend - помещает тег после нашего используемого блока <div>Black</div> <h2>ADD</h2>;


//-------------------------------------------------------
// способ работы с элементом более узкого поиска

//hearts = document.querySelectorAll('.heart'); // здесь указание что поиск идет по всей странице html, но можно указать в каком
                                             // месте блока искать /снизу пример
// вначале урока создана переменная const wrapper = document.querySelectorAll('.heart'); 
//                                              и уже ссылаясь на нее можно использовать heart
// const hearts = wrapper.querySelectorAll('.heart'); // здесь указано что поиск идет в селекторе Wrapper и ищем мы heart

hearts[0].remove(wrapper); // теперь используя переменную wrapper удаляем элементы псевдомассива hearts со страницы
                                          // ссылаясь на wrapper как родительский элемент страницы


//----------------------------------------------- LESSON 29 END----------------------------------------------------------------























