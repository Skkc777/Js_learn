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

/* ------------------------------------------- LESSON 12---------------------------------------------------------------- */

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

/* const numberOfFilms = +prompt("How much films u watch already?", "");

personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false

};

const answerA = prompt('Один из последних просмотренных фильмов?', ""),
      answerB = prompt('На сколько оцените его?', ""),
      answerC = prompt('Один из последних просмотренных фильмов?', ""),
      answerD = prompt('На сколько оцените его?', "");

     personalMovieDB.movies[answerA] = answerB;
     personalMovieDB.movies[answerC] = answerD;

     console.log(personalMovieDB);  */
/* ----------------------------------------------LESSON 12 END--------------------------------------------------------------- */

/* -------------------------------------------------LESSON 13---------------------------------------------------------------- */
/* const numberA = 50;

      if( numberA < 49) {
          console.log('ok');
      } else if(numberA > 100) {
          console.log('fine');
      } else {
          console.log('error');
      }

      (numberA === 50) ? console.log('YES!') : console.log('error2');

const numberA = 50; 
  // тоже самое и со строками то есть знаение переменной '50' и ост. '49' '100' '51'
switch (numberA) {
    case 49 : 
    console.log("not correct");
    break;
    case 100 : 
    console.log("not correct");
    break;
    case 51 : 
    console.log("YES! correct");
    break;
    default : 
    console.log('it not a good =(')
}; */
/* -------------------------------------------------LESSON 13 END ------------------------------------------------------------- */


/* -------------------------------------------------LESSON 14---------------------------------------------------------------- */
let num = 50;
/* while(num <= 55) {
    console.log(num);
    num++;
} */

do {
    console.log(num);
    num++;
} while (num < 55);


for (let i = 1; i < 8; i++) {
    console.log(i);
}
 

for (let i = 1; i < 6; i++) {
    if (i === 6) {
        break;  // или continue; - пропускает значение в условии или i===6 не выводит в консоль, также можно использовать 
    }                                          // с определенной переменной для выявления парных или непарных значений...
    console.log(i);
}

/* -------------------------------------------------LESSON 14 END ------------------------------------------------------------- */