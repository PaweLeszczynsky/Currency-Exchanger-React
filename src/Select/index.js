import "./style.css";
import { allCurrencies } from "../currenciesArray";

const Select = ({ result, firstCurrency, setFirstCurrency, secoundCurrency,
    setSecoundCurrency, amountToExchange, setAmountToExchange, selectName,
    selectId, inputName, disabledValue, stepValue }) => {
    const findSelect = (index) => {
        return (index === 1 ? firstCurrency : secoundCurrency)
    };
    const setSecoundCurency = (index, target) => {
        return (
            index === 1 ?
                setFirstCurrency(target.value)
                : setSecoundCurrency(target.value))
    };
    const setInput = ({ target }) => {
        setAmountToExchange(target.value)
    };
    const findValue = (index) => {
        return (index === 1 ? amountToExchange : result.toFixed(2))
    };
    return (
        <>
            <select className="exchangerForm__selectCurrency" name={selectName} value={findSelect(selectId)}
                onChange={({ target }) => setSecoundCurency(selectId, target)}
            >
                {
                    allCurrencies.map(({ id, name }) => (
                        <option key={id} value={name}>{name}</option>)
                    )
                }
            </select>
            <input className="exchangerForm__amountCurrency"
                name={inputName}
                disabled={disabledValue} type="number" min="0" step={stepValue} value={findValue(selectId)}
                onChange={setInput}
            />
        </>
    )
};
export default Select;