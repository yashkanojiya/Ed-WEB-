"use strict";

/**
 * Utility Function: Add event listener on an element or a list of elements
 */
const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};

/**
 * Navbar Functionality
 */

// Variables
const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

// Functions
const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
};

// Event Listeners
addEventOnElem(navTogglers, "click", toggleNavbar);
addEventOnElem(navLinks, "click", closeNavbar);

/**
 * Header and Back-to-Top Button Functionality
 */

// Variables
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

// Function
const activeElem = function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
};

// Event Listener
addEventOnElem(window, "scroll", activeElem);

/**
 * Video Player Functionality
 */

document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const videoPlayer = document.getElementById("video-player");
  const playButton = document.getElementById("play-btn");

  // Automatically play the video on page load
  videoPlayer.play();

  // Show play button when video ends
  videoPlayer.addEventListener("ended", () => {
    playButton.style.display = "block";
  });

  // Replay the video when the play button is clicked
  playButton.addEventListener("click", () => {
    videoPlayer.play();
    playButton.style.display = "none";
  });
});
