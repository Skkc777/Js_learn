`use strict`;
// --------------------------------------- Homework(ls12;ls15) -----------------------------------------------------------//
/*
const numberOfFilms = +prompt("How much films u watch already?", ""),

personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false

}


for (let i = 0; i < 2; i++) {
        const answerA = prompt('Один из последних просмотренных фильмов?', ""),
        answerB = prompt('На сколько оцените его?', "");

        if (answerA != null && answerB != null && answerA != '' && answerB != '' && answerA.length < 50) {
            personalMovieDB.movies[answerA] = answerB; 
            console.log('done');
        } else {
            console.log('Error');
            i--; // уменьщение значения на -1 по причине невыполнения условия if что приводит к возврату действия хотя
        }                  // изначально уже идет выполнение переменной i + 1(i++); то есть i + 1 = 1 дальше false
                               // и возврат к выполнению действий что ведет к i + 1 = 2; так как второе действие цикла.
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено достаточно мало фильмов');
        } else if(personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log('Маловато будет за жизнь');
        } else if (personalMovieDB.count >=30) {
            console.log('Киноман!:D');
        } else {
            console.log("Error");
        }
    }


// ---------------------------------------------- LESSON 18 homework ----------------------------------------------------------   
  1)  //Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
//       false - выводит в консоль главный объект программы

//Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
//"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres

*/

/*
let numberOfFilms;

function start() {
    numberOfFilms = +prompt("How much films u watch already?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        alert("Введите значение цифрой");
        numberOfFilms = +prompt("How much films u watch already?", "");
    }
}
start();

const personalMovieDB = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false

}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    const answerA = prompt('Один из последних просмотренных фильмов?', ""),
    answerB = prompt('На сколько оцените его?', "");

    if (answerA != null && answerB != null && answerA != '' && answerB != '' && answerA.length < 50) {
        personalMovieDB.movies[answerA] = answerB; 
        console.log('done');
    } else {
        console.log('Error');
        i--; 
           }
    }
}
rememberMyFilms();

function personalLevel() {
if (personalMovieDB.count < 10) {
    console.log('Просмотрено достаточно мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log('Маловато будет за жизнь');
} else if (personalMovieDB.count >=30) {
    console.log('Киноман!:D');
} else {
    console.log("Error");
       }
    }
    personalLevel();
//-----------------------------------------------------
 // function showMyDB(privat) {
 //     if (privat == false) {
 //         return(numberOfFilms);
 //   } else if (privat == true) {                    решение свойства privat
 //       console.log("nothing");
 //   }
//}
 // showMyDB(personalMovieDB.privat);  
//----------------------------------------------
 function showMyDB(hidden) {
     if (!hidden) {
          console.log(personalMovieDB);
     }
 }
 showMyDB(personalMovieDB.privat);

 function writeYourGenres() {
     for (let i = 1; i <= 3; i++) {
       //  const genre = prompt(`Ваш любимый жанр под номером ${i}`);  можно сократить решение если подставить как внизу
     //  вместо personalMovieDB.genres[i - 1] = genre 
         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
     }
 }
 writeYourGenres();
*/
// ---------------------------------------------- LESSON 18 homework END --------------------------------------------------   


// ---------------------------------------------- LESSON 24 homework ------------------------------------------------------   

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("How much films u watch already?", "");

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         alert("Введите значение цифрой");
//         numberOfFilms = +prompt("How much films u watch already?", "");
//     }
// }
// start();

// const personalMovieDB = {
//     count : numberOfFilms,
//     movies : {},
//     actors : {},
//     genres : [],
//     privat : false

// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//     const answerA = prompt('Один из последних просмотренных фильмов?', ""),
//     answerB = prompt('На сколько оцените его?', "");

//     if (answerA != null && answerB != null && answerA != '' && answerB != '' && answerA.length < 50) {
//         personalMovieDB.movies[answerA] = answerB; 
//         console.log('done');
//     } else {
//         console.log('Error');
//         i--; 
//            }
//     }
// }
// rememberMyFilms();

// function personalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено достаточно мало фильмов');
//     } else if(personalMovieDB.count >= 10 && personalMovieDB < 30) {
//         console.log('Маловато будет за жизнь');
//     } else if (personalMovieDB.count >=30) {
//         console.log('Киноман!:D');
//     } else {
//         console.log("Error");
//            }
//         }
//         personalLevel();

//         function showMyDB(privat) {
//                 if (privat == false) {
//                     return(numberOfFilms);
//               } else if (privat == true) {                 //   решение свойства privat
//                   console.log("nothing");
//               }
//            }
//             showMyDB(personalMovieDB.privat); 

//             function showMyDB(hidden) {
//                 if (!hidden) {
//                      console.log(personalMovieDB);
//                 }
//             }
//             showMyDB(personalMovieDB.privat);

//             function writeYourGenres() {
//                 for (let i = 1; i <= 3; i++) {
//                 const genre = prompt(`Ваш любимый жанр под номером ${i}`);  //можно сократить решение если подставить как внизу
//                 // вместо personalMovieDB.genres[i - 1] = genre 
//                 personalMovieDB.genres[i - 1] = genre ;
//                     // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//                 }
//             }
//             writeYourGenres();


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("How much films u watch already?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            alert("Введите значение цифрой");
            personalMovieDB.count = +prompt("How much films u watch already?", "");
        }
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const answerA = prompt('Один из последних просмотренных фильмов?', ""),
                answerB = prompt('На сколько оцените его?', "");

            if (answerA != null && answerB != null && answerA != '' && answerB != '' && answerA.length < 50) {
                personalMovieDB.movies[answerA] = answerB;
                console.log('done');
            } else {
                console.log('Error');
                i--;
            }
        }
    },
    personalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено достаточно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log('Маловато будет за жизнь');
        } else if (personalMovieDB.count >= 30) {
            console.log('Киноман!:D');
        } else {
            console.log("Error");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        //        ------------------------ метод 1 без запятых
        //      for (let i = 1; i <= 3; i++) {
        // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

        // if (genre == '' || genre == null) {
        //     console.log('Вы ввели некорректные данные');
        //     --i;
        // } else {
        //     personalMovieDB.genres[i - 1] = genre;
        // ------------------------------ метод 2
        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Введите ваш любимый жанр через запятую`).toLowerCase();

            if (genres == '' || genres == null) {
                console.log('Вы ввели некорректные данные');
                --i;
            } else {
                personalMovieDB.genres = genres.split(', '); // функция разбивания через запятую то есть 1, 2, 3; = 
                //                                                               Массив и 3 значения в нем [3]
                personalMovieDB.genres.sort();   // функция сортировки по Алфавиту
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Ваш любимый жанр: #${i + 1} - это ${item}`);
        });
    }
};

// ---------------------------------------------- LESSON 24 homework End ------------------------------------------------------   
