
document.getElementById('discount-btn').addEventListener('click', function () {
    const priceElement = document.getElementById('price');
    const priceStr = priceElement.innerText;
    const price = parseFloat(priceStr);

    const payable = document.getElementById('payable');

    const total = (30 * price) / 100;
    payable.innerText = total;



})