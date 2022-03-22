let mainNav = document.querySelector(".main-nav");
let applicantInfo = document.querySelector(".applicant");
let siteItem = document.querySelector(".site-list__item");
let offerBlock = document.querySelector(".offer-block");
let mediaQuery = window.matchMedia("(max-width: 1139px)");

window.onscroll = function() {
  if (window.pageYOffset >= 100 & mediaQuery.matches) {
    mainNav.classList.add("main-nav--fixed");
    applicantInfo.classList.add("applicant--fixed");
    siteItem.classList.add("site-list__item--fixed");
    offerBlock.classList.add("offer-block--fixed");
  } else if (window.pageYOffset <= 100) {
    mainNav.classList.remove("main-nav--fixed");
    applicantInfo.classList.remove("applicant--fixed");
    siteItem.classList.remove("site-list__item--fixed");
    offerBlock.classList.remove("offer-block--fixed");
  }
}
