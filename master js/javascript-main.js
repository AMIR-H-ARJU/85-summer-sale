

function getInputFieldValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const theValue = inputField.value;
    const floatingValue = parseFloat(theValue);
    inputField.value = "";
    return floatingValue;
}

function getInnerTextById(textId) {
    const element = document.getElementById(textId);
    const elementInner = element.innerText;
    const elementFloat = parseFloat(elementInner);
    return elementFloat;
}

function setInnerTextById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue ;
}