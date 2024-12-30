"use strict";

export const showContact = () => {
  const contentTop = document.querySelector(".content-top");
  const contentBottom = document.querySelector(".content-bottom");
  const elTextArea = document.createElement("textarea");
  const btnSubmit = document.createElement("button");

  const elP = document.createElement("p");
  elP.textContent = "Contact Us";
  contentTop.appendChild(elP);

  const elForm = document.createElement("form");
  elForm.action = "#";

  const buildForm = (strFor, strTextContent, strType, strId) => {
    const elDiv = document.createElement("div");
    const elLabel = document.createElement("label");
    const elInput = document.createElement("input");

    elLabel.setAttribute("for", strFor);
    elLabel.textContent = strTextContent;
    elInput.type = strType;
    elInput.id = strId;

    elDiv.appendChild(elLabel);
    elDiv.appendChild(elInput);

    elForm.appendChild(elDiv);
    console.log(elForm);
  };

  buildForm("name", "Name:", "text", "name");
  buildForm("number", "Contact Number:", "number", "number");
  buildForm("email", "Email:", "email", "email");

  const elLabel = document.createElement("label");
  elLabel.setAttribute("for", "message");
  elLabel.textContent = "Your message: ";
  elForm.appendChild(elLabel);

  elTextArea.name = "message";
  elTextArea.id = "message";
  elTextArea.rows = "20";
  elTextArea.cols = "60";
  elForm.appendChild(elTextArea);

  btnSubmit.textContent = "Submit";
  btnSubmit.classList.add("btn");
  btnSubmit.classList.add("btn-submit");
  elForm.appendChild(btnSubmit);

  contentBottom.appendChild(elForm);
};
