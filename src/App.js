import Container from "./Container";
import InputContainer from "./InputContainer";
import Form from "./Form";
import Select from "./Select";
import { useState, useEffect } from "react";
import LabelRate from "./LabelRate";
import SummaryInfo from "./SummaryInfo";
import { allCurrencies } from "./currenciesArray";
function App() {
  const [firstCurrency, setFirstCurrency] = useState(allCurrencies[0].name);
  const [secoundCurrency, setSecoundCurrency] = useState(allCurrencies[0].name);
  const [amountToExchange, setAmountToExchange] = useState(0);
  const [rate, setRate] = useState(1);
  const [result, setResult] = useState(0);
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
  return (
    <Container>
      <Form
        firstCurrency={firstCurrency}
        secoundCurrency={secoundCurrency}
        amountToExchange={amountToExchange}
        rate={rate}
        result={result}
        firstItem={
          <InputContainer
            body={
              <Select
                firstCurrency={firstCurrency}
                secoundCurrency={secoundCurrency}
                amountToExchange={amountToExchange}
                rate={rate}
                result={result}
                setFirstCurrency={setFirstCurrency}
                setAmountToExchange={setAmountToExchange}
                selectName="firstCurrency"
                selectId={1}
                inputName="secoundCurrency"
                disabledValue={false}
                stepValue={0.01}
              />}
          />}
        secoundItem={
          <InputContainer
            body={
              <Select
                firstCurrency={firstCurrency}
                secoundCurrency={secoundCurrency}
                amountToExchange={amountToExchange}
                rate={rate}
                setSecoundCurrency={setSecoundCurrency}
                setAmountToExchange={setAmountToExchange}
                selectName="secoundCurrency"
                selectId={2}
                inputName="amountExchanged"
                disabledValue={true}
                result={result}
              />}
          />}
        thirdItem={
          <InputContainer
            body={
              <LabelRate
                firstCurrency={firstCurrency}
                secoundCurrency={secoundCurrency}
                amountToExchange={amountToExchange}
                result={result}
                rate={rate}
              />}
          />}
        fourthItem={
          <SummaryInfo
            firstCurrency={firstCurrency} rate={rate}
            secoundCurrency={secoundCurrency}
            amountToExchange={amountToExchange}
            result={result}
          />}
      />
    </Container>
  );
}

export default App;
