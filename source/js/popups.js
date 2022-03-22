let noteButton = document.querySelector(".site-list__link--note");
let notePopup = document.querySelector(".modal-note");
let closeNote = document.querySelector(".button--cancel");
let overlay = document.querySelector(".overlay");
let offerButton = document.querySelector(".offer-block__button");
let offerPopup = document.querySelector(".modal-offer");
let closeOffer = document.querySelector(".modal-offer__button");
let offerItems = document.querySelectorAll(".modal-offer__item");

noteButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  notePopup.classList.add("modal-note--show");
  overlay.classList.add("overlay--show");
})

closeNote.addEventListener("click", function (evt) {
  evt.preventDefault();
  notePopup.classList.remove("modal-note--show");
  overlay.classList.remove("overlay--show");
})

offerButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  offerPopup.classList.add("modal-offer--show");
  overlay.classList.add("overlay--show");
})

closeOffer.addEventListener("click", function (evt) {
  evt.preventDefault();
  offerPopup.classList.remove("modal-offer--show");
  overlay.classList.remove("overlay--show");
})

overlay.addEventListener("click", function (evt) {
  evt.preventDefault();
  notePopup.classList.remove("modal-note--show");
  offerPopup.classList.remove("modal-offer--show");
  overlay.classList.remove("overlay--show");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    notePopup.classList.remove("modal-note--show");
    offerPopup.classList.remove("modal-offer--show");
    overlay.classList.remove("overlay--show");
  }
})

for (let offerItem of offerItems) {
  offerItem.onclick = function() {
    offerButton.classList.add("sent")
    offerButton.textContent = "Приглашение отправлено";
    offerPopup.classList.remove("modal-offer--show");
    overlay.classList.remove("overlay--show");
  }
}
