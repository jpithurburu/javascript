//Exercise that determines the final price of product based on the entered cost price and applicable taxes

function finalPrice(price, taxes){
    taxes = taxes / 100;
    price = price + price * taxes;
    return price;
}

let basePrice = parseFloat(prompt('Please enter the base price.'));
let tax = parseFloat(prompt('Please enter the applicable taxes'));

window.alert('The final price is: $'+finalPrice(basePrice, tax));