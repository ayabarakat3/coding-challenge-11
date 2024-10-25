// Task 1: Setting up base of the code to get the elements.
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');
// By creating this code the code is now set up to be able to assign products and find them through their ID's.

// Task 2: Calculate total price when product or quantity changes.
function updateTotalPrice() {
const productPrice = parseFloat(productSelector.value);
const quantity = parseInt(quantityInput.value);
const totalPrice = productPrice * quantity;
// This code is meant to calculate product prices when quantities differ. 
// Code to find the total amount per quantity is now complete.
totalPriceElement.textContent = totalPrice.toFixed(3);}
// This code is set to display the total price to 3 decimal places.
// Code to find the price and display the amount is now complete. 