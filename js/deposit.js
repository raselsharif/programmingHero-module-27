document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositAmount = getInputFieldValueById("deposit-field");
    const innerTextValue = getInnerTextValueById('deposit-amount');

    // if (isNaN(depositAmount)) {
    //     alert("Please! Enter Numbers.")
    //     return;
    // }

    const totalDeposit = depositAmount + innerTextValue;
    displayText(totalDeposit, 'deposit-amount');

    const balance = getInnerTextValueById('balance');
    const totalBalance = balance + depositAmount;
    displayText(totalBalance, 'balance');
})
