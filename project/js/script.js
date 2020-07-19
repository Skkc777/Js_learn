/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

//создал переменные для работы
// const 
//     promoContent = document.querySelector('.promo__content'),
//     promoReklama = document.querySelectorAll('.promo__adv'),
//     promoRekDelete = document.querySelector('.promo__adv-title'),
//     contentNamegenre = promoContent.querySelector('.promo__genre'),
//     promoContentBg = promoContent.querySelector('.promo__bg'),
//     promoFilm = document.querySelector('.promo__interactive'),
//     promoSortFilm = promoFilm.querySelectorAll('.promo__interactive-list'),
//     sortFilm = promoFilm.querySelector('.promo__interactive-item');
    

//    const movieDB = {
//         movies: [
//             "Логан",
//             "Лига справедливости",
//             "Ла-ла лэнд",
//             "Одержимость",
//             "Скотт Пилигрим против..."
//         ]
//     };




// // удалил все элементы в псевдомассиве 

// promoReklama.forEach(item => {

//     item.remove();
// });

// // изменение записи с Комедии на Драма;
// // contentNamegenre.replaceWith('Драма');

// contentNamegenre.textContent = 'Драма';


// // style

// promoContentBg.style.cssText = 'background-image: url(img/bg.jpg);';


//-----------------------------------------------------------1 задача

   const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

const adv = document.querySelectorAll('.promo__adv img'),
poster = document.querySelector('.promo__bg'),
genre = poster.querySelector('.promo__genre'),
movieList = document.querySelector('.promo__interactive-list');

adv.forEach(item => {

    item.remove();
});

// adv.forEach(function (item) {

//     item.remove();
// });                   // второй способ с применением функции безымянной 

//---------------------------------2
genre.textContent = 'Драма';
//-------------------------------3
poster.style.cssText = 'background-image: url(img/bg.jpg);';

// poster.style.backgroundImage = "url('img/bg.jpg')"; // второй способ применения;

movieList.innerHTML = '';

movieDB.movies.sort();


// console.log(poster.innerHTML); // показывает код элемента через переменную
// movieDB.movies.forEach((film, i) => {
//      for (let i = 0; i < movieDB.length; i++ ) {
//           film
//      }
// });

movieDB.movies.forEach((film, i) => {
         movieList.innerHTML += `
    <ul>
         <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    </ul>
         `;                            // += дополнительное присваивание, то есть после удаления залить 
                                                                              // новый контент в структуру
    });










