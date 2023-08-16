document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmount = getInputFieldValueById("withdraw-field");
    const innerTextValue = getInnerTextValueById('withdraw-output');

    // if (isNaN(withdrawAmount)) {
    //     alert("Please! Enter Numbers.")
    //     return;
    // }

    const balance = getInnerTextValueById('balance');

    if (withdrawAmount > balance) {
        alert("Taka nai! Tomar baba k bolo Taka deposit korte.");
        return;
    }
    const totalWithdraw = withdrawAmount + innerTextValue;
    displayText(totalWithdraw, 'withdraw-output');

    const totalBalance = balance - withdrawAmount;
    displayText(totalBalance, 'balance');
})
