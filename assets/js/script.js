/* Author: 

*/


//hamburger
var hamburger = document.querySelector('.hamburger')
var nav = document.querySelector('nav')
var body = document.querySelector('body')
hamburger.addEventListener('click', function () {
  nav.classList.toggle('show')
  hamburger.classList.toggle('show')
  body.classList.toggle('hidden')
})

// Banner slider dots 
var slides = document.querySelectorAll('.banner__slider__item');
var dots = document.querySelectorAll('.dot');

var counter = 0;

dots.forEach(function (dot, inputs) {
  dot.addEventListener('click', function (e) {
    e.preventDefault();
    slides.forEach(function (e) { e.classList.remove('show') });
    slides[inputs].classList.add('show');
    counter = inputs
  })
})

