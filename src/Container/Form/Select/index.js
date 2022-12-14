import { StyledSelectContainer, StyledSelect, StyledInput } from "./styled";

const Select = ({ result, firstCurrency, setFirstCurrency, secoundCurrency,
    setSecoundCurrency, amountToExchange, setAmountToExchange, selectName,
    selectId, inputName, disabledValue, stepValue, mapedCurrenciesArray }) => {

    const resetInput = () => {
        if (amountToExchange === 0) {
            setAmountToExchange("");
        };
    };

    const findSelectValue = (index) => {
        return (index === 1 ? firstCurrency : secoundCurrency)
    };

    const findSelectModifier = (index, target) => {
        return (
            index === 1 ?
                setFirstCurrency(target.value)
                : setSecoundCurrency(target.value))
    };

    const setInput = ({ target }) => {
        setAmountToExchange(+target.value)
    };

    const findValue = (index) => {
        return (index === 1 ? amountToExchange : result.toFixed(2))
    };

    return (
        <>
            <StyledSelectContainer>
                <StyledSelect
                    name={selectName}
                    value={findSelectValue(selectId)}
                    onChange={({ target }) => findSelectModifier(selectId, target)}
                >
                    {
                        mapedCurrenciesArray.map(currency => (
                            <option key={currency} value={currency}>{currency}</option>
                        ))
                    }
                </StyledSelect>
                <StyledInput
                    name={inputName}
                    disabled={disabledValue}
                    type="number"
                    min="0"
                    step={stepValue}
                    value={findValue(selectId)}
                    onChange={setInput}
                    onClick={resetInput}
                />
            </StyledSelectContainer>
        </>
    )
};

export default Select;