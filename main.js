// Task 1: Gathering elements.
// Setting up base of the code to get the elements.
const productSelector = document.getElementById('product-selector');
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.getElementById('total-price');
const placeOrderButton = document.getElementById('place-order');
const orderSummary = document.getElementById('order-summary');
const errorMessage = document.getElementById('error-message');
// By creating this code the code is now set up to be able to assign products and find them through their ID's.

// Task 2: Calculate Total Price Dynamically
// Calculate total price when product or quantity changes.
function updateTotalPrice() {
const productPrice = parseFloat(productSelector.value);
const quantity = parseInt(quantityInput.value);
// This code is meant to calculate product prices when quantities differ. 
// Code to find the total amount per quantity is now complete.
if (quantity < 1){
totalPriceElement.textContent = "0.00";
errorMessage.textContent = "Error! A number greater than 0 is required to display options.";
return;}
else {
errorMessage.textContent = "";}
// Error message added
const totalPrice = productPrice * quantity;
totalPriceElement.textContent = totalPrice.toFixed(2);} 
/* This code is set to display the total price to 2 decimal places as it is the correct format.
Code to find the price and display the amount is now complete. 
Add Event Listener for Product Selection. */
productSelector.addEventListener('change', updateTotalPrice);
quantityInput.addEventListener('input', updateTotalPrice);
// Event lister has now been added. 


// Task 3: Handle Order Submission
// This task will set a base to allow the code to be able to handle order submissions.
placeOrderButton.addEventListener('click', function() {
const selectedProduct = productSelector.options[productSelector.selectedIndex].text;
const quantity = quantityInput.value;
// Code shows how order submissions should be displayed. 
if (errorMessage.textContent) {
return;}
// Code set to reveal error message if search does not fit requirements. 
const totalPrice = totalPriceElement.textContent;
// Code set to show how order submissions are handled along with display message when necessary.
orderSummary.textContent = `Your order of ${quantity}'s ${selectedProduct} totals to $${totalPrice}`;});
// Message set to reveal quantity and total price of item(s) ordered.
