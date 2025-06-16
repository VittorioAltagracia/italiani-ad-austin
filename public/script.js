"use strict";

// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
      })
    );
  }

  // Gallery tabs functionality
  const tabButtons = document.querySelectorAll(".tab-btn");
  const tabContents = document.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const targetTab = this.getAttribute("data-tab");

      // Remove active class from all buttons and contents
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabContents.forEach((content) => content.classList.remove("active"));

      // Add active class to clicked button and corresponding content
      this.classList.add("active");
      document.getElementById(targetTab).classList.add("active");
    });
  });

  // // Newsletter form
  // const newsletterForm = document.querySelector(".newsletter-form");
  // if (newsletterForm) {
  //   newsletterForm.addEventListener("submit", function (e) {
  //     e.preventDefault();
  //     const email = this.querySelector('input[type="email"]').value;
  //     alert(
  //       "Grazie per esserti iscritto alla newsletter con l'email: " + email
  //     );
  //     this.reset();
  //   });
  // }

  // Join form
  // const joinForm = document.getElementById("joinForm");
  // if (joinForm) {
  //   joinForm.addEventListener("submit", function (e) {
  //     e.preventDefault();
  //     const formData = new FormData(this);
  //     const name = formData.get("firstName") + " " + formData.get("lastName");
  //     alert(
  //       "Grazie " +
  //         name +
  //         "! La tua richiesta è stata inviata. Ti contatteremo presto!"
  //     );
  //     this.reset();
  //   });
  // }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});
