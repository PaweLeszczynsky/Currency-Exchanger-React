import { StyledErrorContainer, StyledErrorIcon } from "./styled";

export const ErrorContainer = () => {

    return (
        <StyledErrorContainer>
            {`Error: Something have gone wrong. Server not responding. Please try later.`}
            <StyledErrorIcon/>
        </StyledErrorContainer>
    );
};