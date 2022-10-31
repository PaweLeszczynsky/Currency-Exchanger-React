import Container from "./Container";
import Form from "./Container/Form";
import { useState } from "react";
import { useRate } from "./useRate";
import { useCurrencies } from "./useCurrencies";
import { useExchangeResult } from "./useExchangeResult";
import { useAmountToExchange } from "./useAmountToExchange";

function App() {
  const { currenciesArray, mapedCurrenciesArray, currenciesDate, apiStatus } = useCurrencies();
  const [firstCurrency, setFirstCurrency] = useState("PLN");
  const [secoundCurrency, setSecoundCurrency] = useState("PLN");
  const rate = useRate(firstCurrency, secoundCurrency, currenciesArray);
  const [amountToExchange, setAmountToExchange] = useAmountToExchange();
  const result = useExchangeResult(rate, amountToExchange);

  return (
    <Container>
      <Form
        firstCurrency={firstCurrency}
        secoundCurrency={secoundCurrency}
        amountToExchange={amountToExchange}
        result={result}
        setFirstCurrency={setFirstCurrency}
        setSecoundCurrency={setSecoundCurrency}
        setAmountToExchange={setAmountToExchange}
        currenciesArray={currenciesArray}
        mapedCurrenciesArray={mapedCurrenciesArray}
        currenciesDate={currenciesDate}
        apiStatus={apiStatus}
        rate={rate}
      />
    </Container>
  );
}

export default App;
