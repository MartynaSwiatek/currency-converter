{
    const calculateResult = (amount, currency) => {

        const rateEUR = 4.70;
        const rateDKK = 0.63;
        const rateSEK = 0.41;
        const rateUSD = 4.46;
        const rateCHF = 4.73;

        switch (amount, currency) {
            case "EUR":
                return amount / rateEUR;

            case "DKK":
                return amount / rateDKK;

            case "SEK":
                return amount / rateSEK;

            case "USD":
                return amount / rateUSD;

            case "CHF":
                return amount / rateCHF;
        }
    };

    const updateResultText = (amount, result, currency) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${currency}`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const amountElement = document.querySelector(".js-amount");
        const currencyElement = document.querySelector(".js-currency");


        const amount = +amountElement.value;
        const currency = currencyElement.value;

        const result = calculateResult(amount, currency);

        updateResultText(amount, result, currency);

    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    };

    init();
}
