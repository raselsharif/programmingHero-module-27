
const textArea = document.getElementById('text');
const textValue = textArea.value;


// ==== font bold ===
document.getElementById('bold').addEventListener("click", function () {
    if (textArea.style.fontWeight === 'normal' || textArea.style.fontWeight === '') {
        textArea.style.fontWeight = 'bold';
    } else {
        textArea.style.fontWeight = 'normal';
    }
})
// ==== font italic ===
document.getElementById('italic').addEventListener("click", function () {
    if (textArea.style.fontStyle === 'normal' || textArea.style.fontStyle === '') {
        textArea.style.fontStyle = 'italic';
    } else {
        textArea.style.fontStyle = 'normal';

    }
})

// ==== font underline ===
document.getElementById('underline').addEventListener("click", function () {
    if (textArea.style.textDecoration === 'none' || textArea.style.textDecoration === '') {
        textArea.style.textDecoration = 'underline';
    } else {
        textArea.style.textDecoration = 'none';

    }

})

// ==== font left ===
document.getElementById('left').addEventListener("click", function () {
    textArea.style.textAlign = 'left';
})
// ==== font center ===
document.getElementById('center').addEventListener("click", function () {
    textArea.style.textAlign = 'center';
})
// ==== font right ===
document.getElementById('right').addEventListener("click", function () {
    textArea.style.textAlign = 'right';
})
// ==== font justify ===
document.getElementById('justify').addEventListener("click", function () {
    textArea.style.textAlign = 'justify';
})
// ==== font size ===
document.getElementById('size').addEventListener("input", function () {
    const size = document.getElementById('size');
    textArea.style.fontSize = size.value + 'px';
})
// ==== font transform ===
document.getElementById('transform').addEventListener("click", function () {
    if (textArea.style.textTransform === 'none' || textArea.style.textTransform === '') {
        textArea.style.textTransform = 'capitalize';
    } else {
        textArea.style.textTransform = 'none';
    }
})
// ==== font size ===
document.getElementById('color').addEventListener("input", function () {
    const color = document.getElementById('color');
    textArea.style.color = color.value;
})
document.getElementById('bgColor').addEventListener("input", function () {
    const color = document.getElementById('bgColor');
    textArea.style.backgroundColor = color.value;
})