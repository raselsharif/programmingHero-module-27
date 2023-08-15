function getInputFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldStr = inputField.value;
    const inputFieldValue = parseFloat(inputFieldStr);
    inputField.value = '';
    // if(isNaN(inputFieldValue) || inputFieldValue === ''){
    //     alert("Please! Enter Numbers.")
    //     return;
    // }
    return inputFieldValue;
}

function getInnerTextValueById(innerTextId){
    const inputField = document.getElementById(innerTextId);
    const inputFieldStr = inputField.innerText;
    const inputFieldValue = parseFloat(inputFieldStr);
    return inputFieldValue;
}

function displayText(totalAmount, displayAmount){
    const element = document.getElementById(displayAmount);
    element.innerText = totalAmount;
}

