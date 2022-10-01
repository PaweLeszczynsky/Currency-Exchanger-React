import Container from "./Container";
import Form from "./Container/Form";
import { useState, useEffect } from "react";
import { allCurrencies } from "./currenciesArray";

function App() {
  const [firstCurrency, setFirstCurrency] = useState(allCurrencies[0].name);
  const [secoundCurrency, setSecoundCurrency] = useState(allCurrencies[0].name);
  const [amountToExchange, setAmountToExchange] = useState(0);
  const [rate, setRate] = useState(1);
  const [result, setResult] = useState(0);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const firstValue = allCurrencies.find(({ name }) => name === firstCurrency).value;
    const secoundValue = allCurrencies.find(({ name }) => name === secoundCurrency).value;
    const rateValue = secoundValue / firstValue;
    setRate(rateValue);
  }, [firstCurrency, secoundCurrency]);

  useEffect(() => {
    if (amountToExchange < 0) {
      setAmountToExchange(Math.abs(amountToExchange));
    };
    setResult(rate * amountToExchange);
  }, [rate, amountToExchange]);

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1000)
  });

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
        date={date}
      />
    </Container>
  );
}

export default App;
