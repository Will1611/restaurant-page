"use strict";

export const showAbout = () => {
  const contentTop = document.querySelector(".content-top");
  const contentBottom = document.querySelector(".content-bottom");
  const elStrong = document.createElement("strong");
  let elP = document.createElement("p");

  elP.textContent = "About Santino";
  contentTop.appendChild(elP);

  elP = document.createElement("p");
  elP.textContent =
    "Welcome to Santino, your authentic Italian escape in the heart of Dunfermline. At Santino, we bring the rich flavors, warm hospitality, and passionate spirit of Italy to your table. Whether you're here for a casual dinner, a family gathering, or a special celebration, our goal is to provide an unforgettable dining experience that transports you straight to Italy.";
  contentBottom.appendChild(elP);

  elP = document.createElement("p");
  elP.textContent =
    "Inspired by the traditional recipes of Italy's many regions, our menu is a true celebration of Italian cuisine. From hand-crafted pasta made fresh daily to wood-fired pizzas, succulent meats, and vibrant seasonal dishes, every meal is crafted with the finest locally-sourced ingredients and authentic Italian imports. Our chefs take pride in using time-honored methods and secret family recipes, creating dishes that are full of flavor, tradition, and love.";
  contentBottom.appendChild(elP);

  elP = document.createElement("p");
  elP.textContent =
    "Santino is more than just a restaurant – it’s a place where friends and family come together to share a meal, laugh, and create memories. Our welcoming atmosphere reflects the warmth and charm of Italian culture, where every guest is treated like family. We want you to feel right at home as you enjoy delicious food, fine wines, and exceptional service.";
  contentBottom.appendChild(elP);

  elP = document.createElement("p");
  elP.textContent =
    "Whether you're a longtime fan of Italian cuisine or a first-time visitor, we promise a dining experience that will keep you coming back for more. Join us at Santino, where every bite is a taste of Italy, and every visit feels like a celebration.";
  contentBottom.appendChild(elP);

  elP = document.createElement("p");
  elP.appendChild(elStrong);
  elStrong.textContent = "Benvenuti and Buon Appetito!";
  contentBottom.appendChild(elP);
};

console.log("About, muthafucka");
