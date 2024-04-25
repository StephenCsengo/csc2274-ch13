"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Payment Form Script
   
   Author: Stephen Csengo
   Date:   4/24/2024
   
   Filename: co_payment.js
   
   Function List
   =============
   
   runSubmit()
      Runs validation tests when the submit button is clicked
      
   validateCVC()
      Validates the credit card CVC number
      
   validateMonth()
      Validates that the user has selected the expiration month of the credit card
      
   validateYear()
      Validates that the user has selected the expiration year of the credit card
      
   validateNumber()
      Validates that the user has entered a valid and legitimate card number
      
   validateCredit()
      Validates that the user has selected a credit card type
      
   validateName()
      Validates that the user has specified the name on the credit card
      
   sumDigits(numStr)
      Sums the digits characters in a text string
      
   luhn(idNum)
      Returns true of idNum satisfies the Luhn Algorithm

*/

window.addEventListener("load", function () {
  //retrieve the field/value pairs from the url
  let formData = location.search.slice(1);
  formData = formData.replace(/\+/g, " ");
  formData = decodeURIComponent(formData);
  let formFields = formData.split(/[&=]/g);

  document.forms.order.elements.orderDate.value = formFields[1];
  document.forms.order.elements.modelName.value = formFields[5];
  document.forms.order.elements.qty.value = formFields[7];
  document.forms.order.elements.initialCost.value = formFields[9];
  document.forms.order.elements.protectionName.value = formFields[13];
  document.forms.order.elements.protectionCost.value = formFields[15];
  document.forms.order.elements.subtotal.value = formFields[17];
  document.forms.order.elements.salesTax.value = formFields[19];
  document.forms.order.elements.totalCost.value = formFields[21];
});

window.addEventListener("load", function () {
  document.getElementById("subButton").onclick = runSubmit;
  document.getElementById("cardName").oninput = validateName;
});

function validateName() {
  let cardName = document.getElementById("cardName");
  if (cardName.validity.valueMissing) {
    cardName.setCustomValidity("Enter your name as it appears on the card");
  } else {
    cardName.setCustomValidity("");
  }
}

function runSubmit() {
  validateName();
  validateCredit();
}

function validateCredit() {
  let creditCard = document.forms.payment.elements.credit[0];
  if (creditCard.validity.valueMissing) {
    creditCard.setCustomValidity("Select your credit card");
  } else {
    creditCard.setCustomValidity("");
  }
}
