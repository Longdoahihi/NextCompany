var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

var headerSearchBox = $('.header__search__box');
var outHeaderSearch = $('.app__class');

outHeaderSearch.addEventListener("click",()=>{
    openBox();
})

function openBox(){
    headerSearchBox.classList.toggle('header__search__box--open');
    outHeaderSearch.classList.toggle('hidden');
}
document.querySelector('.header__icon__search').addEventListener("click", openBox);

export default openBox;