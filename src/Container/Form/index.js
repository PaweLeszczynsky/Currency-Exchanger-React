import Select from "./Select";
import LabelRate from "./LabelRate";
import SummaryInfo from "./SummaryInfo";
import DateContainer from "./DateContainer";
import { CurrenciesApiInfo } from "./CurrenciesApiInfo";
import { StyledForm, StyledFieldset, StyledLegend } from "./styled";
import { UpdatingContainer } from "./UpdatingContainer";
import { ErrorContainer } from "./ErrorContainer";

const Form = ({ firstCurrency, secoundCurrency, amountToExchange,
    setFirstCurrency, setSecoundCurrency, result,
    setAmountToExchange, currenciesArray, mapedCurrenciesArray,
    currenciesDate, apiStatus, rate }) => {

    return (
        <StyledForm>
            <StyledFieldset>
                <StyledLegend>
                    Currency Exchanger
                </StyledLegend>
                <DateContainer />
                {apiStatus === "loading" && (
                    <UpdatingContainer />
                )}
                {apiStatus === "updated" && (
                    <>
                        <Select
                            firstCurrency={firstCurrency}
                            secoundCurrency={secoundCurrency}
                            amountToExchange={amountToExchange}
                            result={result}
                            setFirstCurrency={setFirstCurrency}
                            setAmountToExchange={setAmountToExchange}
                            selectName="firstCurrency"
                            selectId={1}
                            inputName="secoundCurrency"
                            disabledValue={false}
                            stepValue={0.01}
                            mapedCurrenciesArray={mapedCurrenciesArray}
                        />
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
                            mapedCurrenciesArray={mapedCurrenciesArray}
                        />
                        <LabelRate
                            firstCurrency={firstCurrency}
                            secoundCurrency={secoundCurrency}
                            amountToExchange={amountToExchange}
                            result={result}
                            rate={rate}
                        />
                        <SummaryInfo
                            firstCurrency={firstCurrency} rate={rate}
                            secoundCurrency={secoundCurrency}
                            amountToExchange={amountToExchange}
                            result={result}
                        />
                        <CurrenciesApiInfo currenciesDate={currenciesDate} />
                    </>
                )}
                {apiStatus === "error" && (
                    <ErrorContainer />
                )}
            </StyledFieldset>
        </StyledForm>)
};

export default Form;
