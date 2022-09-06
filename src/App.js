import Container from "./Container";
import Paragraph from "./Paragraph";
function App() {
  return (
    <Container>
      <form className="exchangerForm">
        <fieldset className="exchangerForm__fieldset">
          <legend className="exchangerForm__legend">Currency Exchanger</legend>
          <Paragraph>

            <select className="exchangerForm__selectCurrency" name="firstCurrency">
              <option value="PLN" selected>PLN</option>
              <option value="EURO">EURO</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="CHF">CHF</option>
            </select> <input className="exchangerForm__amountCurrency"
              name="amountToexchange" type="number" min="0" step="0.01" />

          </Paragraph>
          <Paragraph>
            <select className="exchangerForm__selectCurrency"
              name="secoundCurrency">
              <option value="PLN">PLN</option>
              <option value="EURO" selected>EURO</option>
              <option value="USD">USD</option>
              <option value="GBP">GBP</option>
              <option value="CHF">CHF</option>
            </select> <input className="exchangerForm__amountCurrency"
              name="amountExchanged" type="number" disabled value="0.00" />
          </Paragraph>
          <Paragraph>
            <label className="exchangerForm__exchangeRate"><span>RATE</span></label><input
              className="exchangerForm__amountExchangerate" disabled
              type="number" name="value" value="0.2099" />
          </Paragraph>
          <div className="exchangerForm__summaryExchange">
          </div>
        </fieldset>
      </form>
    </Container>
  );
}

export default App;
