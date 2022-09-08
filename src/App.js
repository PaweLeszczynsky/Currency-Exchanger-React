import Container from "./Container";
import Paragraph from "./Paragraph";
import Form from "./Form";
import Select from "./Select";
import { useState } from "react";
import LabelRate from "./LabelRate";
import SummaryInfo from "./SummaryInfo";
function App() {
  const allCurrencies = [
    { id: 1, name: "PLN", value: 1 },
    { id: 2, name: "EURO", value: 0.2099 },
    { id: 3, name: "USD", value: 0.2194 },
    { id: 4, name: "CHF", value: 0.2131 },
    { id: 5, name: "GBP", value: 0.1789 },
  ];
  const [currencies, setCurrencies] = useState();
  return (
    <Container>
      <Form
        firstItem={
          <Paragraph
            body={
              <Select
                name="firstCurrency"
              />
            }
          />}
        secoundItem={
          <Paragraph
            body={
              <Select
                name="secoundCurrency"
              />
            }
          />}
        thirdItem={
          <Paragraph
            body={
              <LabelRate />
            }
          />}
        fourthItem={
          <SummaryInfo
          />
        }
      />
    </Container>
  );
}

export default App;
