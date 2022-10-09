import styled from "styled-components";

export const StyledForm = styled.form`
    background-color: rgb(163 208 255 / 80%);
    margin: 5% 10%;
    padding: 5% 5%;
    border-radius: 20px;
    box-shadow: 0 0 20px 2px rgb(163 208 255 / 80%);
    flex-basis: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledFieldset = styled.fieldset`
    padding: 50px;
    border-radius: 20px;
    flex-basis: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-color: rgb(34 153 195);
    
    @media (max-width:500px) {
        padding: 50px 8vw;
}
    @media (max-width:350px) {
        padding: 50px 0;
    }
`;

export const StyledLegend = styled.legend`
    padding: 0 5%;
    text-align: center;
    
    @media (max-width:350px) {
        padding: 0 1%;
        text-align: center;
    }
`;