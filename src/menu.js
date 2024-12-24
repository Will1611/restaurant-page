"use strict";

export const showMenu = () => {
  console.log("Menu, muthafucka");

  const contentTop = document.querySelector(".content-top");
  const contentBottom = document.querySelector(".content-bottom");

  contentTop.textContent = "Our Menu";
};
