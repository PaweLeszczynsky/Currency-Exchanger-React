import Container from "./Container";
import Paragraph from "./Paragraph";
import Form from "./Form";
import Select from "./Select";
import { useState } from "react";
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
      <Form>

        <Paragraph>
          <Select
            name="firstCurrency"
          />

          <input className="exchangerForm__amountCurrency"
            name="amountToexchange" type="number" min="0" step="0.01" />

        </Paragraph>
        <Paragraph>
          <Select
            name="secoundCurrency"
          />
          {/* <select className="exchangerForm__selectCurrency"
            name="secoundCurrency">
            <option value="PLN">PLN</option>
            <option value="EURO" selected>EURO</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="CHF">CHF</option>
          </select> */}
          <input className="exchangerForm__amountCurrency"
            name="amountExchanged" type="number" disabled value="0.00" />
        </Paragraph>
        <Paragraph>
          <label className="exchangerForm__exchangeRate"><span>RATE</span></label><input
            className="exchangerForm__amountExchangerate" disabled
            type="number" name="value" value="0.2099" />
        </Paragraph>
        <div className="exchangerForm__summaryExchange">
        </div>
      </Form>
    </Container>
  );
}

export default App;
