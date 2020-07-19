'use strict';

// Навигация по DOM и прочее 


// console.log(document.head);

// console.log(document.documentElement);

// console.log(document.body.childNodes); // позволяет нам просмотреть все узлы и элементы в теге body;

// console.log(document.body.firstChild); 
// console.log(document.body.firstElementChild); 
// console.log(document.body.lastChild); 

// console.log(document.querySelector('#current').parentNode.parentNode); 
// console.log(document.querySelector('#current').parentElement); 

// элемент в теге data- и к нему какое-то особое значение data-current='3' для использования какой то части для js

// console.log(document.querySelector('[data-current="3"').nextElementSibling);  // .nextSibling следущая .previousSibling предыдущая
                                                         // за элементом в странице тег или пустая строка



for (let node of document.body.childNodes) {  //перебор элементов на странице для выполнения каких то задач;
   if(node.nodeName == '#text') {
       continue;
   }
   console.log(node);
}













