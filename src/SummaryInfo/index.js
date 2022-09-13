import "./style.css";
const SummaryInfo = ({ currencies }) => {
    return (
        <div className={`exchangerForm__summaryExchange ${currencies.toExchangeAmount > 0 ? "exchangerForm__summaryExchange--visible" : ""}`}>
            {currencies.firstCurrency === currencies.secoundCurrency ?
                `Choose another currency` :
                (`${currencies.toExchangeAmount} ${currencies.firstCurrency} = ${currencies.exchangedAmount} ${currencies.secoundCurrency}`)}
        </div>
    )
};
export default SummaryInfo;