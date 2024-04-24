"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 13
   Tutorial Case

   Order Form Script
   
   Author: Stephen Csengo
   Date:   4/24/2024
   
   Filename: co_order.js
   
   Function List
   =============
   
   calcOrder()
      Calculates the cost of the customer order
      
   formatNumber(val, decimals)
      Format a numeric value, val, using the local
      numeric format to the number of decimal
      places specified by decimals
      
   formatUSACurrency(val)
      Formats val as U.S.A. currency
   
*/

window.addEventListener("load", function () {
  let orderForm = document.forms.orderForm;
  orderForm.elements.orderDate.value = new Date().toDateString();
  orderForm.elements.model.focus();
  //calculate the cost of the order
  calcOrder();
});

function calcOrder() {
  let orderForm = document.forms.orderForm;
  //calculate the initial cost of the order
  let mIndex = orderForm.elements.model.selectedIndex;
  let mCost = orderForm.elements.model.options[mIndex].value;
  let qIndex = orderForm.elements.qty.selectedIndex;
  let quantity = orderForm.elements.qty[qIndex].value;
  //initial cost = cost x quant
  let initialCost = mCost * quantity;
  orderForm.elements.initialCost.value = formatUSACurrency(initialCost);
  //retrieve the cost of the user's protection plan
  let pCost =
    document.querySelector('input[name="protection"]:checked').value * quantity;
  orderForm.elements.protectionCost.value = formatNumber(pCost, 2);
  //calculate the order subtotal
  orderForm.elements.subtotal.value = formatNumber(initialCost + pCost, 2);
  //calculate the sales tax
  let salesTax = 0.05 * (initialCost + pCost);
  orderForm.elements.salesTax.value = formatNumber(salesTax, 2);
  //calculate the cost of the total order
  let totalCost = initialCost + pCost + salesTax;
  orderForm.elements.totalCost.value = formatUSACurrency(totalCost);
}

function formatNumber(val, decimals) {
  return val.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function formatUSACurrency(val) {
  return val.toLocaleString("en-US", { style: "currency", currency: "USD" });
}
