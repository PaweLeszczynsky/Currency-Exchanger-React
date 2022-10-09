import { StyledSummaryInfo } from "./styled";

const SummaryInfo = ({ firstCurrency, secoundCurrency, amountToExchange, result }) => {
    return (
        <StyledSummaryInfo
            visible={amountToExchange > 0}
        >
            {firstCurrency === secoundCurrency ?
                `Choose another currency` :
                (`${amountToExchange} ${firstCurrency} = ${result.toFixed(2)} ${secoundCurrency}`)
            }
        </StyledSummaryInfo>
    )
};

export default SummaryInfo;