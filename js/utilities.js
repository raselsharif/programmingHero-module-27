function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldStr);

    return inputFieldValue;
}

function getInnerTextValueById(innerTextId){
    const inputField = document.getElementById(innerTextId);
    const inputFieldStr = inputField.innerText;
    const inputFieldValue = parseFloat(inputFieldStr);

    return inputFieldValue;
}



document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositAmount = getInputFieldValueById("deposit-field");
    console.log(depositAmount);

    const innerTextValue = getInnerTextValueById('deposit-amount');
    console.log(innerTextValue);
})