"use strict";

import "./style.css";
import "./about.js";
import { showHome } from "./home.js";
import { showMenu } from "./menu.js";
import "./contact.js";

const variables = (() => {
  const menu = document.querySelector(".btn-menu");
  const about = document.querySelector(".btn-about");
  const contact = document.querySelector(".btn-contact");
  const heading = document.querySelectorAll(".heading-main");
  const contentTop = document.querySelector(".content-top");
  const contentBottom = document.querySelector(".content-bottom");

  return { menu, about, contact, heading, contentTop, contentBottom };
})();

const clearContent = () => {
  const contentTop = variables.contentTop;
  const contentBottom = variables.contentBottom;
  contentTop.classList.add("content-top");
  contentBottom.classList.add("content-bottom");
  contentTop.textContent = "";
  contentBottom.textContent = "";
};

const listen = (() => {
  const btnMenu = variables.menu;
  const btnAbout = variables.about;
  const btnContact = variables.contact;
  const headingMain = variables.heading;

  window.addEventListener("load", showHome);

  btnMenu.addEventListener("click", () => {
    clearContent();
    showMenu();
  });

  btnAbout.addEventListener("click", () => {
    console.log("Now showing about");
  });

  btnContact.addEventListener("click", () => {
    console.log("Now showing contact");
  });

  headingMain.forEach((heading) => {
    heading.addEventListener("click", () => {
      clearContent();
      showHome();
    });
  });
})();
