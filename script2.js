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

showMes("Hi world");  //в строку функции ставится аргумент для выполнения самой функции




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
console.log(retB);      



logAdd();          // expression function, то есть аргумент функции выполняется только после выполнения функции внутри перемен.
const logAdd = function() {        // выразительные функции выполняются по порядку выполнения кода, а не как обычные функц.
      console.log("Hello")     // порядок выполнения чтения кода браузером: читает весь код находит переменные, находит функц.
};   // стоит отметить что в exp.funct ставится после кода ;                       а exp.func выполняет по порядку следования                        
logAdd();






const calc = (a, b) => a + b;  // стрелочная функция не имеет своего контекста (if, else, this)
console.log(calc());

const calc = (a, b) => {   // тоже самое с раскрытием значений в стрелочной функции
    console.log('1');
    return (a, b);
};
*/

/* ------------------------------------------------ LESSON 16 END ----------------------------------------------------------- */



/* ------------------------------------------------ LESSON 17  ------------------------------------------------------------- */
                                    //      Методы и свойства строк и чисел

/*
const str = "test";
const arr = [1, 2, 3, 4, 5]; // вызов количества значений в массиве так же через .length

console.log(str.toUpperCase()); // изменение в перемен. регистр символов на 'TEST' вместо 'test'
console.log(str.toLowerCase()); // тоже самое только наоборот 'TEST' in 'test' or 'teSt' in 'test'
console.log(str.length);   //получение количества символов в переменной "".length"

//-------------------------

const fruit = 'Some fruit';

console.log(fruit.indexOf('f')); // поиск подстроки, то есть с какого числа начинается буква 'f' в коде, а именно '5'
                                                      // отсчет начинается с 0 (this is !important to know);
 console.log(fruit.indexOf('q')); // в этом случае получим значение -1 по причине отсутствия этой буквы в слове;

//-------------------------

const logg = 'Hello world';

console.log(logg.slice(6, 11)); // вывод метода slice в котором указывается с какого индекса начинать считывать информацию
// в logg, где есть два значения (6, 11) в котором 6 это индекс начала и второе знач. где по какой включительно считывать.

console.log(logg.slice(6)); // с одним знач. с какого начать и до окончания значения;

console.log(logg.substring(6, 11)); // аналогичный метод применения slice; 

console.log(logg.substr(6, 5)); // первое знач. с какого индекса начать вырезать и второе значение сколько символов вырезать;

//---------------------------------------------


// Числовые пременения или Math

const num = 12.5;

console.log(Math.round(num)); //округление числа в зависимости от значения 12.1-.4 - округл до 12 и 12.5 - .9 к 13


const pars = '12.2px';

console.log(parseInt(pars)); // перевод одну систему изчисления в какую-то определенную другую которую требуется вам.
                                     // пиксели изменены в просто в систему цифр. получим '12';

console.log(parseFloat(pars)); // в этом случае переводит в числовое значение с дробными или десятичными значениями
                                     // получим значение '12.2' - с десятичной частью и пиксели переведены в цифровое значение.

*/
/* ------------------------------------------------ LESSON 17  ------------------------------------------------------------- */


