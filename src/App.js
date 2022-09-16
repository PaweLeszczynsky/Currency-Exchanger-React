import Container from "./Container";
import Paragraph from "./Paragraph";
import Form from "./Form";
import Select from "./Select";
import { useState } from "react";
import LabelRate from "./LabelRate";
import SummaryInfo from "./SummaryInfo";
import { allCurrencies } from "./currenciesArray";
function App() {
  const [firstCurrency, setFirstCurrency] = useState(allCurrencies[0].name);
  const [secoundCurrency, setSecoundCurrency] = useState(allCurrencies[0].name);
  const [amountToExchange, setAmountToExchange] = useState(0);
  const [rate, setRate] = useState(1);
  const [result, setResult] = useState(0);
  const calculateRate = (firstCurrency, secoundCurrency) => {
    const firstValue = allCurrencies.find(({ name }) => name === firstCurrency).value;
    console.log(firstValue);
    const secoundValue = allCurrencies.find(({ name }) => name === secoundCurrency).value;
    console.log(secoundValue);
    const rateValue = secoundValue / firstValue;
    setRate(rateValue);
  };
  const calculateResult = (amountToExchange, rate) => {
    setResult(rate * amountToExchange);

  };
  return (
    <Container>
      <Form
        calculateRate={calculateRate}
        calculateResult={calculateResult}
        firstCurrency={firstCurrency}
        secoundCurrency={secoundCurrency}
        amountToExchange={amountToExchange}
        rate={rate}
        firstItem={
          <Paragraph
            body={<Select
              firstCurrency={firstCurrency}
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
          <Paragraph
            body={<Select
              secoundCurrency={secoundCurrency}
              setSecoundCurrency={setSecoundCurrency}
              amountToExchange={amountToExchange}
              setAmountToExchange={setAmountToExchange}
              selectName="secoundCurrency"
              selectId={2}
              inputName="amountExchanged"
              disabledValue={true}
              result={result}
            />}
          />}
        thirdItem={
          <Paragraph
            body={<LabelRate
              rate={rate}
            />}
          />}
        fourthItem={<SummaryInfo
          firstCurrency={firstCurrency}
          secoundCurrency={secoundCurrency}
          amountToExchange={amountToExchange}
          result={result}
        />}
      />
    </Container>
  );
}

export default App;
