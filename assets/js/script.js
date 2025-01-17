'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

document.querySelector('.tour-search-form').addEventListener('submit', function (event) {
  event.preventDefault();
  console.log('Form submitted'); // Add this line to check if the event listener is triggered

  const destination = document.querySelector('#destination').value;
  const people = document.querySelector('#people').value;
  const checkin = new Date(document.querySelector('#checkin').value);
  const checkout = new Date(document.querySelector('#checkout').value);

  const duration = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24)) + 'D/' + (Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24)) - 1) + 'N';

  document.querySelector('#package-destination').textContent = destination;
  document.querySelector('#package-people').textContent = 'pax: ' + people;
  document.querySelector('#package-duration').textContent = duration;
});

function updatePackageDetails() {
  const destination = document.querySelector('#destination').value;
  const people = document.querySelector('#people').value;
  const checkin = new Date(document.querySelector('#checkin').value);
  const checkout = new Date(document.querySelector('#checkout').value);

  const duration = Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24)) + 'D/' + (Math.ceil((checkout - checkin) / (1000 * 60 * 60 * 24)) - 1) + 'N';

  // Update all package items
  for (let i = 1; i <= 3; i++) {
    document.querySelector(`#package-destination-${i}`).textContent = destination;
    document.querySelector(`#package-people-${i}`).textContent = 'pax: ' + people;
    document.querySelector(`#package-duration-${i}`).textContent = duration;
  }
}