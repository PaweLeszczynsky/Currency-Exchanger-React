import "./style.css";

const Form = ({ calculateRate, calculateResult, firstCurrency, secoundCurrency, amountToExchange, rate, firstItem, secoundItem, thirdItem, fourthItem }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        console.log(firstCurrency, secoundCurrency, amountToExchange, rate);
        calculateRate(firstCurrency, secoundCurrency);
        console.log(firstCurrency, secoundCurrency, amountToExchange, rate);
        calculateResult(amountToExchange, rate);
    };
    return (
        <form onInput={onFormSubmit}
            className="exchangerForm">
            <fieldset className="exchangerForm__fieldset">
                <legend className="exchangerForm__legend">Currency Exchanger</legend>
                {firstItem}
                {secoundItem}
                {thirdItem}
                {fourthItem}
            </fieldset>
        </form>)
};

export default Form;
