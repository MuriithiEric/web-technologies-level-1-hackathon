'use strict';

// ------------  Navigation  ---------------- //

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const navigationLinksText = document.getElementsByClassName("navbar-link")
console.log(navigationLinksText);
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.dataset.navLink.toLowerCase() === pages[i].dataset.page.toLowerCase()) {
        pages[i].classList.add("active");
        navigationLinksText[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinksText[i].classList.remove("active");
      }
    }

  });
}

// ------------  Contact  ---------------- //

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}