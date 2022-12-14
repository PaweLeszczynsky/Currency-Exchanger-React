import styled from "styled-components";

export const StyledDateContainer = styled.div`
    border: 2px solid black;
    border-radius: 20px;
    max-width: 600px;
    background: linear-gradient(0deg, rgba(34, 153, 195, 1) 0%, rgba(0, 249, 158, 1) 100%);
    vertical-align: middle;
    padding: 5px 10px;
    display: flex;
    text-align: center;
    line-height: 1.5;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;
    font-size: small;
    
    @media (max-width:500px) {
        min-width: 100%;
    }
`;