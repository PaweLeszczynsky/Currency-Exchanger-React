import { StyledUpdatedCurencies } from "./styled";

export const CurrenciesApiInfo = ({ currenciesDate }) => {

    return (
        <StyledUpdatedCurencies>
            Currency data delivered are sourced from financial data providers and banks, including the European Central Bank.<br />
            Updated as: <b>{currenciesDate.replace(/T|Z/g, " ")}</b>
        </StyledUpdatedCurencies>
    );

};