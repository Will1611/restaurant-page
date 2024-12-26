"use strict";

export const showMenu = () => {
  const contentTop = document.querySelector(".content-top");
  const contentBottom = document.querySelector(".content-bottom");
  let elP = document.createElement("p");

  elP.textContent = "Our Menu";
  contentTop.appendChild(elP);
};
