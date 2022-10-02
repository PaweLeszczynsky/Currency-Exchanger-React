import { useState, useEffect } from "react";
import { allCurrencies } from "../../../currenciesArray";


const DateTime = () => {
    const [rate, setRate] = useState(1);
    const [firstCurrency, setFirstCurrency] = useState(allCurrencies[0].name);
    const [secoundCurrency, setSecoundCurrency] = useState(allCurrencies[0].name);
    useEffect(() => {
        const firstValue = allCurrencies.find(({ name }) => name === firstCurrency).value;
        const secoundValue = allCurrencies.find(({ name }) => name === secoundCurrency).value;
        const rateValue = secoundValue / firstValue;
        setRate(rateValue);
    }, [firstCurrency, secoundCurrency]);
};
export default DateTime;