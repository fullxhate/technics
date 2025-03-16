const auto = document.getElementById("cars");
const hoursSelect = document.getElementById("hours");
const output = document.getElementById("output");
const product = document.getElementById("product");
const weight = document.getElementById("weight");
const meters = document.getElementById("meters");
const squareMeters = document.getElementById("squareMeters");
const result = document.getElementById("result");

function calculate() {
    const productPrice = parseInt(auto.value);
    const hoursAmount = parseInt(auto.value);

    if (productPrice && hoursAmount) {
        const totalPrice = productPrice * hoursAmount;
        console.log(output);
        output.innerText = `Цена: ${totalPrice}руб.`;
    } else {
        output.innerText = ""; // clear the output
    }
}
function calculatePrice() {
    const price = parseInt(product.value) * parseFloat(weight.value) * parseFloat(meters.value) * parseFloat(squareMeters.value);

    if (isNaN(price)) {
        result.value = "";
    } else {

        result.value = price.toLocaleString();
    }
}







product.addEventListener("change", calculatePrice);
weight.addEventListener("input", calculatePrice);
meters.addEventListener("input", calculatePrice);
squareMeters.addEventListener("input", calculatePrice);
auto.addEventListener("change", calculate);
hoursSelect.addEventListener("change", calculate);





