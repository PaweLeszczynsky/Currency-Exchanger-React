import "./style.css";
import { allCurrencies } from "../currenciesArray";

const Select = ({ currencies, setCurrencies, selectName, selectId, inputName, disabledValue, stepValue }) => {
    const findSelect = (index) => {
        return (index === 1 ? currencies.firstCurrency : currencies.secoundCurrency)
    };

    const setSecoundCurency = (index, target) => {
        return (
            index === 1 ?
                setCurrencies({ ...currencies, firstCurrency: target.value })
                : setCurrencies({ ...currencies, secoundCurrency: target.value }))
    };

    return (

        <>
            <select className="exchangerForm__selectCurrency" name={selectName} value={findSelect(selectId)}
                onChange={({ target }) => setSecoundCurency(selectId, target)}
            >
                {
                    allCurrencies?.map(({ id, name }) => (
                        <option key={id} value={name}>{name}</option>)
                    )
                }
            </select>
            <input className="exchangerForm__amountCurrency"
                name={inputName}
                disabled={disabledValue} type="number" min="0" step={stepValue}
                onChange={({ target }) => setCurrencies({ ...currencies, toExchangeAmount: target.value })}
            />
        </>
    )
};
export default Select;