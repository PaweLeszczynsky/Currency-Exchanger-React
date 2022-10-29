import { useState, useEffect } from "react";

export const useAmountToExchange = () => {
    const [amountToExchange, setAmountToExchange] = useState(0);

    useEffect(() => {
        if (amountToExchange < 0) {
            setAmountToExchange(Math.abs(amountToExchange));
        };
    }, [amountToExchange]);

    return [amountToExchange, setAmountToExchange];
};