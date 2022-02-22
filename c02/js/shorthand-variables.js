// Variables are declared & values assigned in the same statement
var price = 5;
var quantity = 14;
var total = price * quantity;

// 3 Variables declared on same line then values are assigned to them
var price, quantity, total;
price = 5;
quantity = 14;
total = price * quantity;

// 2 Variables are declared and assigned values on the same line then 1 declared then assigned on the next line
var price = 5, quantity = 14; // You can declare different data types (i.e. string, boolean, array, null, etc)
var total = price * quantity;

// Variable is used to hold reference to an element in HTML markup
//Write total in the element with id of cost
var el = document.getElementById('cost');
el.textContent = '$' + total


// They can save you time but can make your code harder to read.