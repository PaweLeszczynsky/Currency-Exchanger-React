import { useCurrenciesArray } from "../../../currencies";
import { StyledUpdatedCurencies } from "./styled";

export const CurrenciesApiInfo = () => {

    const {currenciesArray, mapedCurrenciesArray, currenciesDate, updateApiStatus} = useCurrenciesArray();
    return (
        <StyledUpdatedCurencies>
            Currency data delivered are sourced from financial data providers and banks, including the European Central Bank.<br/>
            Updated as: <b>{currenciesDate}</b>
        </StyledUpdatedCurencies>
    );

};