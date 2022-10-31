import axios from "axios";
import { useState, useEffect } from "react";

export const useCurrencies = () => {
    const [currenciesArray, setCurrenciesArray] = useState();
    const [mapedCurrenciesArray, setMapedCurrenciesArray] = useState();
    const [currenciesDate, setCurrenciesDate] = useState();
    const [apiStatus, setApiStatus] = useState("loading");

    useEffect(() => {
        getRates();

    }, []);

    const getRates = async () => {
        try {
            const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
            setCurrenciesArray(response.data.rates);
            setMapedCurrenciesArray(Object.keys(response.data.rates));
            setCurrenciesDate(response.data.date);

            setTimeout(() => {
                setApiStatus("updated");
            }, 3000);
        }
        catch {
            setApiStatus("error");
        }
    };

    return {currenciesArray, mapedCurrenciesArray, currenciesDate, apiStatus};
};