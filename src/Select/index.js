import "./style.css";

const Select = ({ selectName, inputName, disabledValue, stepValue }) => (
    <>
        <select className="exchangerForm__selectCurrency" name={selectName}>
            <option value="PLN" selected>PLN</option>
            <option value="EURO">EURO</option>
            <option value="USD">USD</option>
            <option value="GBP">GBP</option>
            <option value="CHF">CHF</option>
        </select>
        <input className="exchangerForm__amountCurrency"
            name={inputName} disabled={disabledValue} type="number" min="0" step={stepValue} />
    </>
);
export default Select;