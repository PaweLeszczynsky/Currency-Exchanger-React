import Container from "./Container";
import Form from "./Container/Form";
import { useState, useEffect } from "react";
import { allCurrencies } from "./currenciesArray";
import { useRate } from "./useRate";

function App() {
  const [firstCurrency, setFirstCurrency] = useState(allCurrencies[0].name);
  const [secoundCurrency, setSecoundCurrency] = useState(allCurrencies[0].name);
  const [amountToExchange, setAmountToExchange] = useState(0);
  const rate = useRate(firstCurrency, secoundCurrency);
  const [result, setResult] = useState(0);

  useEffect(() => {
    if (amountToExchange < 0) {
      setAmountToExchange(Math.abs(amountToExchange));
    };
    setResult(rate * amountToExchange);
  }, [rate, amountToExchange]);

  return (
    <Container>
      <Form
        firstCurrency={firstCurrency}
        secoundCurrency={secoundCurrency}
        amountToExchange={amountToExchange}
        rate={rate}
        result={result}
        setFirstCurrency={setFirstCurrency}
        setSecoundCurrency={setSecoundCurrency}
        setAmountToExchange={setAmountToExchange}
      />
    </Container>
  );
}

export default App;
