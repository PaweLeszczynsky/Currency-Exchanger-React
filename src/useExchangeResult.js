import { useState, useEffect } from "react";

export const useExchangeResult = (rate, amountToExchange) => {
    const [result, setResult] = useState(0);

    useEffect(() => {
        setResult(rate * amountToExchange);
    }, [rate, amountToExchange]);
    return result;
};