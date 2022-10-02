import "./style.css";

const LabelRate = ({ rate }) => {
    return (
        <>
            <div className="exchangeRate"><span>RATE</span></div>
            <div className="amountExchangeRate">{rate.toFixed(4)}</div>
        </>
    )
};

export default LabelRate;