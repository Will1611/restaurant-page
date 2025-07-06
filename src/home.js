"use strict";

// import imgHome from "./img/img-home";

export function showHome() {
  const contentTop = document.querySelector(".content-top");
  const contentBottom = document.querySelector(".content-bottom");
  let elP = document.createElement("p");

  elP.textContent = "Welcome to Santino!";
  contentTop.appendChild(elP);

  elP = document.createElement("p");
  elP.textContent = "Authentic Italian cuisine in the heart of Dunfermline";
  contentTop.appendChild(elP);

  elP = document.createElement("p");
  elP.textContent = "Buon Appetito!";
  contentBottom.appendChild(elP);

  elP = document.createElement("p");
  elP.textContent =
    "At Santino, we bring the true taste of Italy right to your table. Whether you're here for a casual dinner, a special celebration, or a cozy date night, our menu is crafted with passion, offering traditional recipes and the finest ingredients.";
  contentBottom.appendChild(elP);

  elP = document.createElement("p");
  elP.textContent =
    "From freshly made pasta to wood-fired pizzas, our dishes are designed to transport you to the sun-kissed shores of Italy. Every meal is a celebration of the art of Italian cooking — rich in flavor, heart, and soul.";
  contentBottom.appendChild(elP);

  // elImg.src = imgHome;
  // contentBottom.appendChild(elImg);

  elP = document.createElement("p");
  elP.textContent = "  Use the buttons at the top to navigate our site.";
  contentBottom.appendChild(elP);
}
