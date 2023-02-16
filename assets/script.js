const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.querySelector('.arrow_left');
const rightArrow = document.querySelector('.arrow_right');
const bannerImg = document.querySelector('.banner-img');
const tagLine = document.querySelector('#banner p');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

leftArrow.addEventListener('click', function() {
	console.log("Left arrow clicked.");
	currentSlide--;
	if (currentSlide < 0) {
	  currentSlide = slides.length - 1;
	}
	updateSlide();
  });
  
  rightArrow.addEventListener('click', function() {
	console.log("Right arrow clicked.");
	currentSlide++;
	if (currentSlide >= slides.length) {
	  currentSlide = 0;
	}
	updateSlide();
  });

  dots[currentSlide].classList.add('dot_selected');

  function updateSlide() {
	bannerImg.src = slides[currentSlide].image;
	tagLine.innerHTML = slides[currentSlide].tagLine;
  
	for (let i = 0; i < dots.length; i++) {
		dots[i].classList.remove('dot_selected');
	  }
	
	  dots[currentSlide].classList.add('dot_selected');
  }
