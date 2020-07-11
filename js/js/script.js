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

const numberOfFilms = +prompt("How much films u watch already?", "");

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

     console.log(personalMovieDB); 
/* ----------------------------------------------LESSON 12 END--------------------------------------------------------------- */



