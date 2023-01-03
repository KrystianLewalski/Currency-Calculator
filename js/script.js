let fieldElement = document.querySelector(".js-Field");
let currencyElement = document.querySelector(".js-Currency");
let formElement = document.querySelector(".form");
let converterElement = document.querySelector(".js-Converter");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let field = fieldElement.value
    let currency = currencyElement.value

    let converter = field / currency;
    
    converterElement.innerText = converter.toFixed(2)
});