let responsesButton = document.querySelector(".responses__button");
let responsesList = document.querySelector(".responses__list");
let responsesIcon = document.querySelector(".responses__icon");

responsesButton.addEventListener("click", function() {
  if (responsesList.classList.contains("responses__list--closed")) {
    responsesList.classList.remove("responses__list--closed");
    responsesList.classList.add("responses__list--opened");
    responsesIcon.classList.add("responses__icon--opened");
    responsesIcon.classList.remove("responses__icon--closed");
  } else {
    responsesList.classList.add("responses__list--closed");
    responsesList.classList.remove("responses__list--opened");
    responsesIcon.classList.add("responses__icon--closed");
    responsesIcon.classList.remove("responses__icon--opened");
  }
})

