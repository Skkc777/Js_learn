"use strict";

//----------------------------------------------- LESSON 22 ------------------------------------------------------------------
//                                Передача по ссылке или по значению, Spread оператор

// let   a = 5,
//       b = a;

//       b = b + 5;                     // передача по ссылке, то есть a=5 b=a (то есть 5) и модиф. b меняю знач a;
      
//       console.log(b);
//       console.log(a);


// const obj = {
//     a: 5,               //меняется значение из-за применения к ней другой переменной copy = obj;
//     b: 1
// };

// const copy = obj; // Якобы я ссылаюсь на Obj и Copy является Obj и модифицируя Copy я работаю с obj и ее данными

// copy.a = 10;

// console.log(copy);
// console.log(obj);

function copy(mainObj) {
       let objCopy = {};

       let key;
       for (key in mainObj) {
           objCopy[key] = mainObj[key];
       }
       return objCopy;
}

const numbers = {
      a: 2,
      b: 5,
      c: {
          x: 7,
          y: 4
      }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;       //создание поверхностной копии;
newNumbers.c.x = 10; // обращение к поверхностной копии и происходит ссылка на c.x и все равно происходит изменение на зн.10
console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
};

// console.log(Object.assign(numbers, add)); //создание независимого обьекта с добавлением add;

const clone = Object.assign({}, add);  //Создание копии переменной add;
// console.log (Object.assign(numbers, add));   //обьеденение нескольких обьектов в один;
clone.d = 20;

console.log(add);
console.log(clone);

// ---------------------------------------------------- slice создание копии и применение к ней новых значений независимо

const oldArray = ['a', 'b', 'c'];

const newArray = oldArray.slice();

newArray[1] = 'sliceMethod';

console.log(oldArray);
console.log(newArray);


// Spread метод разбор и добавление новых значений в массив;

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];  // разворачивает значения всех массивов в одну общую группу;

      console.log(internet);

     
//------------------------------------- Spread метод разбор

function log(a, b, c) {  // благодаря spread оператору '...' разворачивает значения массива или 
    console.log(a);                                   // отдельных частей обьекта в обьекте;
    console.log(b);
    console.log(c);

}

const num = [2, 5, 7];

log(...num);  // ... разворачивает массив с внутренними значениями для функции;

//--------------------------------------------------


const array = ['a', 'b'];

const newAaray = [...array];

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

//----------------------------------------------- LESSON 22 END ----------------------------------------------------------------
