// Calculate customer's order price
var price;
var quantity;
var total;

// Set Variables and equation
price = 5;
quantity = 14;
total = price * quantity;

// Populate total in document
var el = document.getElementById('cost')
el.textContent = '$' + total