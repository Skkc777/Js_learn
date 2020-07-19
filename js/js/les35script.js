'use strict';

const p = document.querySelectorAll('p');
console.log(p);

//<script defer src="jsfail.js" - defer дает время на загрузки страницы
//<script async src="jsfail.js" - async загружает скрипт сразу как страница в обработке





function loadScript(src) {
   const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}
loadScript('js/les35_test.js');
loadScript('js/les35_test.js');




















