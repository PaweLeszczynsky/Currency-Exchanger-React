import {
    StyledUpdatingContainer, StyledLoadingContainer,
    StyledIconEuro, StyledIconDolar, StyledIconPound
} from "./styled";

export const UpdatingContainer = () => {
    return (
        <StyledUpdatingContainer>
            {`We are working on update currencies rates. Wait a sec... : )`}
            <StyledLoadingContainer>
                <StyledIconEuro />
                <StyledIconDolar />
                <StyledIconPound />
            </StyledLoadingContainer>
        </StyledUpdatingContainer>
    )
};