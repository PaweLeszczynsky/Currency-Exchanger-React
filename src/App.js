import Container from "./Container";
function App() {
  return (
    <Container>
        <form className="exchangerForm">
            <fieldset className="exchangerForm__fieldset">
                <legend className="exchangerForm__legend">Currency Exchanger</legend>
                <p className="exchangerForm__paragraph">
                    <select className="exchangerForm__selectCurrency" name="firstCurrency">
                        <option value="PLN" selected>PLN</option>
                        <option value="EURO">EURO</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="CHF">CHF</option>
                    </select> <input className="exchangerForm__amountCurrency"
                        name="amountToexchange" type="number" min="0" step="0.01"/>
                </p>
                <p className="exchangerForm__paragraph">
                    <select className="exchangerForm__selectCurrency"
                        name="secoundCurrency">
                        <option value="PLN">PLN</option>
                        <option value="EURO" selected>EURO</option>
                        <option value="USD">USD</option>
                        <option value="GBP">GBP</option>
                        <option value="CHF">CHF</option>
                    </select> <input className="exchangerForm__amountCurrency"
                        name="amountExchanged" type="number" disabled value="0.00"/>
                </p>
                <p className="exchangerForm__paragraph">
                    <label className="exchangerForm__exchangeRate"><span>RATE</span></label><input
                        className="exchangerForm__amountExchangerate" disabled
                        type="number" name="value" value="0.2099"/>
                </p>
                <div className="exchangerForm__summaryExchange">
                </div>
            </fieldset>
        </form>
    </Container>
  );
}

export default App;
