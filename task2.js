let cart = []; 
function addToCart(product, price) { 
cart.push({ product, price }); 
} 
function getTotal() { 
return cart.reduce((total, item) => total + item.price, 0); 
} 
addToCart("Lap", 1000); 
addToCart("xyz", 50); 
console.log("Total Bill" + getTotal()); 