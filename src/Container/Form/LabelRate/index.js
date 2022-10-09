import { StyledRateContainer, StyledAmountRate, StyledRate } from "./styled";

const LabelRate = ({ rate }) => {
    return (
        <>
            <StyledRateContainer>
                <StyledRate>RATE</StyledRate>
                <StyledAmountRate>{rate.toFixed(4)}</StyledAmountRate>
            </StyledRateContainer>
        </>
    )
};

export default LabelRate;