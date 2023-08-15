// Slider
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".slider__btn--right");
const btnLeft = document.querySelector(".slider__btn--left");
const dotContainer = document.querySelector(".dots");

let curSlide = 0;
let maxSlide = slides.length;

// const slider = document.querySelector('.slider');
// slider.style.transform = `scale(0.4) translateX(-800px)`;
// slider.style.overflow = `visible`;

const activateDot = (slide) => {
  document.querySelectorAll(".dots__dot").forEach((ele) => {
    ele.classList.remove("dots__dot--active");
  });

  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add("dots__dot--active");
};

const createDots = () => {
  slides.forEach((_, i) => {
    dotContainer.insertAdjacentHTML(
      "beforeend",
      `<button class="dots__dot" data-slide="${i}" ></button>`
    );
  });
};
createDots();
activateDot(0);

const goToSlide = (slide) => {
  slides.forEach((ele, i) => {
    ele.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);

const nextSlide = () => {
  if (maxSlide - 1 === curSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

const previousSlide = () => {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  activateDot(curSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", previousSlide);

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") nextSlide();
  if (event.key === "ArrowLeft") previousSlide();
});

dotContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("dots__dot")) {
    const { slide } = event.target.dataset;
    goToSlide(slide);
    activateDot(slide);
  }
});
