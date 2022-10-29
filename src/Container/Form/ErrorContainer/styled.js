import styled from "styled-components";
import { ErrorAlt } from "styled-icons/boxicons-solid";

export const StyledErrorContainer = styled.div`
    display: flex;    
    padding: 5px 10px;
    text-align: center;
    line-height: 1.5;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 50px 10px;
    font-size: 20px;
    color: black;

    @media (max-width:500px) {
        min-width: 100%;
    }
`;

export const StyledErrorIcon = styled(ErrorAlt)`
    color: red;
    height: 50px;
    width: 50px;
    margin: 10px;
`;