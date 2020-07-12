`use strict`;

/* const questionS = confirm("Are u here?");
console.log(questionS); */

/* 
const answerA = prompt("Do u have 18 age old?", "18");
console.log(answerA);  */

/* const answerS = [];

answerS[0] = prompt("What's ur name?", "");
answerS[1] = prompt("What's ur surname?", "");
answerS[2] = prompt("How old are u?", "");

console.log(typeof(answerS), answerS);  */

/* const categoryItem = "toys";

console.log("https://google.com/toys${categoryItem} and something else =)"); */


/* ------------------------------------------------ LESSON 16 FUNCTION ------------------------------------------------------ */

/*
let unG = 30; // глобальная переменная которая является основной и применима в разных функциях и с разным значением

   function showMes(text) {    //указано значение text и подставляется аргумент Hi world для выполнение задачи функции
   console.log(text);
     let unG = 20; // является локальной переменной, которая работает внутри этой функции, но не снаружи
}

showMes("Hi world"); */ //в строку функции ставится аргумент для выполнения самой функции


/*

function calc(a, b) {
      return(a + b);   // после команды return; дальнейшие действия в функции не выполняются, а выходят на исходную к 
}                                                      // к началу функции пока есть условия(аргументы);

console.log(calc(4, 6));         // аргумент функции помещен в консоль и выводится уже непосредственно в консоли с выполнением
console.log(calc(8, 12));                // нужной нам функции 
console.log(calc(14, 16));


function ret() {
    let num = 50;
    // здесь может выполнятся какой-то код;


    return(num);
}

const retB = ret(); // в перем. выполняется функция и получаем ее значение и если надо получаем вывод в консоле
console.log(retB);        */

/*

logAdd(); // expression function, то есть аргумент функции выполняется только после выполнения функции внутри перемен.
const logAdd = function() {        // выразительные функции выполняются по порядку выполнения кода, а не как обычные функц.
      console.log("Hello")  // порядок выполнения чтения кода браузером: читает весь код находит переменные, находит функц.
}; // стоит отметить что в exp.funct ставится после кода ;                       а exp.func выполняет по порядку следования                        
logAdd();

*/



/*
const calc = (a, b) => a + b;  // стрелочная функция не имеет своего контекста (if, else, this)
console.log(calc());

const calc = (a, b) => {   // тоже самое с раскрытием значений в стрелочной функции
    console.log('1');
    return (a, b);
};
*/

/* ------------------------------------------------ LESSON 16 END ----------------------------------------------------------- */