
document.getElementById('discount-btn').addEventListener('click', function () {
    const priceElement = document.getElementById('price');
    const priceStr = priceElement.innerText;
    const price = parseFloat(priceStr);

    const payable = document.getElementById('payable');
    const coupon = document.getElementById('coupon');
    console.log(coupon.value);

    if (coupon.value === "DISC30") {
        const discountPrice = (30 * price) / 100;
        const total = price - discountPrice;
        payable.innerText = total;
    } else {
        if(coupon.value == ""){
            payable.innerText = price;
        }else{
            alert('this coupon is expired')
        }
    }

})