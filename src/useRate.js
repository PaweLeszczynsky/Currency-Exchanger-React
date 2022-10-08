import { useState, useEffect } from "react";
import { allCurrencies } from "./currenciesArray";

export const useRate = (firstCurrency, secoundCurrency) => {

    const [rate, setRate] = useState(1);

    useEffect(() => {
        const firstValue = allCurrencies.find(({ name }) => name === firstCurrency).value;
        const secoundValue = allCurrencies.find(({ name }) => name === secoundCurrency).value;
        const rateValue = secoundValue / firstValue;
        setRate(rateValue);
    }, [firstCurrency, secoundCurrency]);
    return rate;
};