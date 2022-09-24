import "./style.css";
const LabelRate = ({ rate }) => {
    return (
        <>
            <div className="exchangerForm__exchangeRate"><span>RATE</span></div>
            <div className="exchangerForm__amountExchangerate">{rate.toFixed(4)}</div>
        </>
    )
};
export default LabelRate;