import axios from "axios";
import { useState, useEffect } from "react";

export const useCurrenciesArray = () => {
    const [currenciesArray, setCurrenciesArray] = useState();
    const [mapedCurrenciesArray, setMapedCurrenciesArray] = useState();
    const [currenciesDate, setCurrenciesDate] = useState();
    const [updateApiStatus, setUpdateApiStatus] = useState("loading");

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
                setUpdateApiStatus("updated");
            }, 3000);
        }
        catch {
            setUpdateApiStatus("error");
        }
    };

    return {currenciesArray, mapedCurrenciesArray, currenciesDate, updateApiStatus};
};