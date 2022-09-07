import "./style.css";

const Select = ({name}) => {
    <select className="exchangerForm__selectCurrency" name={name}>
        <option value="PLN" selected>PLN</option>
        <option value="EURO">EURO</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
        <option value="CHF">CHF</option>
    </select>
};
export default Select;