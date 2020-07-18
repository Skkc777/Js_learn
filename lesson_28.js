"use strict";

//----------------------------------------------- LESSON 28 ------------------------------------------------------------------

                                 // Получение элементов со страницы (Обьектная модель документа)
                                 // Document object model(DOM)

    const box = document.getElementById('box'); //запрос на поиск id тега для работы с ним;

    console.log(box);

    // const btns = document.getElementsByTagName('button')[1]; // получение количество кнопок и обращение к кнопке 2;

    // console.log(btns);

    // const btns = document.getElementsByTagName('button');

    // console.log(btns);     //обращение к кнопка за счет переменной, обращение происходит за счет псевдомассива [0,1,2,3,4];

const circle = document.getElementsByClassName('circle');

console.log(circle);


const hearts = document.querySelectorAll('.heart'); // употребление точки или через id как в css

// console.log(hearts);

hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('.heart');  // получает первый элемент по названию класса или айди 
console.log(oneHeart);

const oneHear = document.querySelector('#box');
console.log(oneHear);

//----------------------------------------------- LESSON 28 END ----------------------------------------------------------------






































































































