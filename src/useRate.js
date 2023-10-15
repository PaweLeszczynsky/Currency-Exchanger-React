import { useState, useEffect } from "react";

export const useRate = (firstCurrency, secoundCurrency, currenciesArray) => {

    const [rate, setRate] = useState(1);

    useEffect(() => {
        if (currenciesArray !== undefined) {
            const firstValue = currenciesArray[firstCurrency].value;
            const secoundValue = currenciesArray[secoundCurrency].value;
            const rateValue = secoundValue / firstValue;
            setRate(rateValue);
        };
    }, [firstCurrency, secoundCurrency, currenciesArray]);

    return rate;
};