import "./style.css";

const SummaryInfo = ({ firstCurrency, secoundCurrency, amountToExchange, result }) => {
    return (
        <div className={`summaryExchange 
        ${amountToExchange > 0 ? "summaryExchange--visible" : ""}`}
        >
            {firstCurrency === secoundCurrency ?
                `Choose another currency` :
                (`${amountToExchange} ${firstCurrency} = ${result.toFixed(2)} ${secoundCurrency}`)
            }
        </div>
    )
};
export default SummaryInfo;