const people = [
  {
    name: "Tanya Sinclair",
    job: "UX Engineer",
    image: "url(/images/image-tanya.jpg)",
    review: `“ I’ve been interested in coding for a while but never taken the jump, until now. 
    I couldn’t recommend this course enough. I’m now in the job of my dreams and so 
    excited about the future. ”`,
  },
  {
    name: "John Tarkpor",
    job: "Junior Front-end Developer",
    image: "url(/images/image-john.jpg)",
    review: `“ If you want to lay the best foundation possible I’d recommend taking this course. 
        The depth the instructors go into is incredible. I now feel so confident about 
        starting up as a professional developer. ”`,
  },
];
const reviewSection = document.querySelector(".review");

const personImage = document.querySelector(".person");
const review = document.querySelector(".quote");
const name = document.querySelector(".name");
const job = document.querySelector(".job");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentItem = 0;

function setReview() {
  const item = people[currentItem];
  personImage.style.backgroundImage = item.image;
  review.innerHTML = item.review;
  name.innerHTML = item.name;
  job.innerHTML = item.job;
}

function transition() {
  reviewSection.style.transform = "scale(1.1)";
  reviewSection.style.transition = "transform 200ms";

  setTimeout(function () {
    reviewSection.style.transform = "scale(1)";
  }, 400);
}
window.onload = setReview;

prevBtn.addEventListener("click", function () {
  prevBtn.style.transform = "translateX(-3px)";
  prevBtn.style.transition = "transform 200ms";

  setTimeout(function () {
    prevBtn.style.transform = "translateX(0px)";
  }, 250);
  currentItem--;
  if (currentItem < 0) {
    currentItem = people.length - 1;
  }
  setReview();
  transition();
});

nextBtn.addEventListener("click", function () {
  nextBtn.style.transform = "translateX(3px)";
  nextBtn.style.transition = "transform 200ms";

  setTimeout(function () {
    nextBtn.style.transform = "translateX(0px)";
  }, 250);

  currentItem++;
  if (currentItem > people.length - 1) {
    currentItem = 0;
  }
  setReview();
  transition();
});
