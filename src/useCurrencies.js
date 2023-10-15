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
            const response = await axios.get("https://api.currencyapi.com/v3/latest?apikey=cur_live_4KkP37qwi05H1LYMz7QUCpAIaTZ2cMPdcTjL28JA");
            setCurrenciesArray(response.data.data);
            setMapedCurrenciesArray(Object.keys(response.data.data));
            setCurrenciesDate(response.data.meta.last_updated_at);

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