import "./style.css";

const Select = ({ name }) => (
    <>
        <select className="exchangerForm__selectCurrency" name={name}>
            <option value="PLN" selected>PLN</option>
            <option value="EURO">EURO</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="CHF">CHF</option>
        </select>
        <input className="exchangerForm__amountCurrency"
            name="amountToexchange" type="number" min="0" step="0.01" />
    </>
);
export default Select;