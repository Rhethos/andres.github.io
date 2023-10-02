// adds the background color to the header
$(window).scroll(function(){
  var scroll = $(window).scrollTop();

  if (scroll >= 100) {
      $(".header").addClass("header-scroll");
  } else {
      $(".header").removeClass("header-scroll");
  }
});

const burger = document.querySelector('.burger');
const dropdown = document.querySelector('.dropdown');

// it lets me click outside of the dropdown menu so i can close the menu
document.addEventListener('click', (event) => {
  if (dropdown.classList.contains('active') && !dropdown.contains(event.target)) {
    dropdown.classList.remove('active');
    burger.classList.remove('active');
    document.querySelector('#burger-icon').classList.remove('fa-times');
    document.querySelector('#burger-icon').classList.add('fa-burger');
  }
});

// it changes the burger icon into the X
burger.addEventListener('click', (event) => {
  dropdown.classList.toggle('active');
  burger.classList.toggle('active');
  document.querySelector('#burger-icon').classList.toggle('fa-burger');
  document.querySelector('#burger-icon').classList.toggle('fa-times');
  event.stopPropagation();
});

// animate on scroll
AOS.init({
	offset: 100,
	duration: 800,
	once: true,
	mirror: false,
});

// scroll to top button
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("gotopbtn");
  let progressValue = document.getElementById("gotopbtn-filled");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#F43545,#FA8901 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

// modal and carousel
const modal = document.getElementById("myModal");
const openButton = document.getElementById("openModalButton");
const carouselImages = document.querySelectorAll(".carousel img");
const prevButton = document.querySelector(".previous-arrow");
const nextButton = document.querySelector(".next-arrow");

let currentSlide = 0;

openButton.addEventListener("click", () => {
  modal.style.display = "block";
  showSlide(currentSlide);
});

modal.querySelector(".close").addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

prevButton.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = carouselImages.length - 1;
  }
  showSlide(currentSlide);
});

nextButton.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= carouselImages.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
});

function showSlide(slideIndex) {
  carouselImages.forEach((image) => {
    image.style.display = "none";
  });
  carouselImages[slideIndex].style.display = "block";
}