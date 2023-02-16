const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
  
  const myPath = "./assets/images/slideshow/";
  const leftArrow = document.querySelector(".arrow_left");
  const rightArrow = document.querySelector(".arrow_right");
  const bannerImg = document.querySelector(".banner-img");
  const tagLine = document.querySelector("#banner p");
  const dotsContainer = document.querySelector(".dots");
  
  let currentSlide = 0;

  leftArrow.addEventListener("click", function () {
	console.log("Left arrow clicked.");
	currentSlide--;
	if (currentSlide < 0) {
	  currentSlide = slides.length - 1;
	}
	updateSlide();
  });
  
  rightArrow.addEventListener("click", function () {
	console.log("Right arrow clicked.");
	currentSlide++;
	if (currentSlide >= slides.length) {
	  currentSlide = 0;
	}
	updateSlide();
  });
  
  function createDots() {
	for (let i = 0; i < slides.length; i++) {
	  const dot = document.createElement("span");
	  dot.classList.add("dot");
	  dotsContainer.innerHTML += dot.outerHTML;
	  dot.addEventListener("click", function() {
		currentSlide = i;
		updateSlide();
	  });
	}
  }
  
  createDots();
  const dots = dotsContainer.querySelectorAll(".dot");
  dots[currentSlide].classList.add("dot_selected");
  
  function updateSlide() {
	bannerImg.src = myPath + slides[currentSlide].image;
	tagLine.innerHTML = slides[currentSlide].tagLine;
  
	for (let i = 0; i < dots.length; i++) {
	  if (i === currentSlide) {
		dots[i].classList.add("dot_selected");
	  } else {
		dots[i].classList.remove("dot_selected");
	  }
	}
  }
  