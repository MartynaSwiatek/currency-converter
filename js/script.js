let formElement = document.querySelector(".js-form");
let amountElement = document.querySelector(".js-amount");
let currencyElement = document.querySelector(".js-currency");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let rateEUR = 4.70;
    let rateDKK = 0.63;
    let rateSEK = 0.41;
    let rateUSD = 4.46;
    let rateCHF = 4.73;


    let currency = currencyElement.value;
    let amount = +amountElement.value;
    let result = resultElement.value;

    switch (currency) {
        case "EUR":
            result = amount / rateEUR;
            break;
        case "DKK":
            result = amount / rateDKK;
            break;
        case "SEK":
            result = amount / rateSEK;
            break;
        case "USD":
            result = amount / rateUSD;
            break;
        case "CHF":
            result = amount / rateCHF;
            break;
    };

    resultElement.innerText = `${amountElement.innerText} PLN = ${result.toFixed(2)} ${currency}`;
});

