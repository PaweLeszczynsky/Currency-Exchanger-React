import "./style.css";
import InputContainer from "./InputContainer";
import Select from "./Select";
import LabelRate from "./LabelRate";
import SummaryInfo from "./SummaryInfo";

const Form = ({ firstCurrency, secoundCurrency, amountToExchange,
    rate, result, setFirstCurrency, setSecoundCurrency,
    setAmountToExchange }) => {
    return (
        <form
            className="exchangerForm">
            <fieldset className="exchangerForm__fieldset">
                <legend className="exchangerForm__legend">
                    Currency Exchanger
                </legend>
                <InputContainer>
                    <Select
                        firstCurrency={firstCurrency}
                        secoundCurrency={secoundCurrency}
                        amountToExchange={amountToExchange}
                        rate={rate}
                        result={result}
                        setFirstCurrency={setFirstCurrency}
                        setAmountToExchange={setAmountToExchange}
                        selectName="firstCurrency"
                        selectId={1}
                        inputName="secoundCurrency"
                        disabledValue={false}
                        stepValue={0.01}
                    />
                </InputContainer>

                <InputContainer>
                    <Select
                        firstCurrency={firstCurrency}
                        secoundCurrency={secoundCurrency}
                        amountToExchange={amountToExchange}
                        rate={rate}
                        setSecoundCurrency={setSecoundCurrency}
                        setAmountToExchange={setAmountToExchange}
                        selectName="secoundCurrency"
                        selectId={2}
                        inputName="amountExchanged"
                        disabledValue={true}
                        result={result}
                    />
                </InputContainer>

                <InputContainer>
                    <LabelRate
                        firstCurrency={firstCurrency}
                        secoundCurrency={secoundCurrency}
                        amountToExchange={amountToExchange}
                        result={result}
                        rate={rate}
                    />
                </InputContainer>

                <SummaryInfo
                    firstCurrency={firstCurrency} rate={rate}
                    secoundCurrency={secoundCurrency}
                    amountToExchange={amountToExchange}
                    result={result}
                />
            </fieldset>
        </form>)
};
export default Form;
