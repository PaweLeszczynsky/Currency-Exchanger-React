import styled from "styled-components";

export const StyledRateContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;
    width: 250px;

    @media (max-width:500px) {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;
    min-width: 100%;
    }
`;

export const StyledRate = styled.div`
    border: 2px solid black;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    padding: 20px;
    height: 70px;
    line-height: 1.5;
    display: inline-block;
    vertical-align: middle;
    text-align: center;
    min-width: 109px;
    margin-right: -2px;
    background: linear-gradient(0deg, rgba(34, 153, 195, 1) 0%, rgba(0, 249, 158, 1) 100%);

    @media (max-width:500px) {
        min-width: 50%;
    }
`;

export const StyledAmountRate = styled.div`
    border: 2px solid black;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    padding: 20px 5px;
    height: 70px;
    vertical-align: middle;
    min-width: 100px;
    width: 40%;
    text-align: center;
    line-height: 1.5;
    background: linear-gradient(0deg, rgba(34, 153, 195, 1) 0%, rgba(0, 249, 158, 1) 100%);

    &:disabled{
        color: black;
    }
    
    @media (max-width:500px) {
        min-width: 50%;
    }
`;