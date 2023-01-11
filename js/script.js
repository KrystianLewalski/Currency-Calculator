{
    const onFormSubmit = (event) => {
        const fieldElement = document.querySelector(".js-Field");
        const currencyElement = document.querySelector(".js-Currency");
        const converterElement = document.querySelector(".js-Converter");
        
        event.preventDefault();

        const field = fieldElement.value;
        const currency = currencyElement.value;

        const converter = field / currency;

        converterElement.innerText = converter.toFixed(2);

    };

    const init = () => {
        const formElement = document.querySelector(".form");
        formElement.addEventListener("submit", onFormSubmit);
    };
    init();
}