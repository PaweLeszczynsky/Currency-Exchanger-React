import styled from "styled-components";
import { CurrencyEuro } from "@styled-icons/bootstrap/CurrencyEuro";
import { CurrencyDollar } from "@styled-icons/bootstrap/CurrencyDollar";
import { CurrencyPound } from "@styled-icons/bootstrap/CurrencyPound";

export const StyledUpdatingContainer = styled.div`
    vertical-align: middle;
    padding: 5px 10px;
    text-align: center;
    line-height: 1.5;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px 10px;
    font-size: 20px;
    color: rgba(22,79,128,1);
    @media (max-width:500px) {
        min-width: 100%;
    }
`;

export const StyledLoadingContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

export const StyledIconEuro = styled(CurrencyEuro)`
    @keyframes loader1 {
        29% {
            transform: rotate3d(0, 1, 0, 180deg);
            background-color: black;
        }

        100% {
            transform: rotate3d(0, 1, 0, 0deg);
            background-color: rgba(0, 249, 158, 1);
        }

    }
    color: black;
    background-color: rgb(0, 0, 0);
    font-size: 15px;
    border: 3px solid black;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    padding: 5px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate3d(0, 1, 0, 180deg);
    animation: loader1 1.5s infinite;
`;
export const StyledIconDolar = styled(CurrencyDollar)`
    @keyframes loader2 {
        49% {
            transform: rotate3d(0, 1, 0, 180deg);
            background-color: black;
        }

        100% {
            transform: rotate3d(0, 1, 0, 0deg);
            background-color: rgba(0, 249, 158, 1);
        }
    }
    color: black;
    background-color: rgb(0, 0, 0);
    font-size: 15px;
    border: 3px solid black;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    padding: 5px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate3d(0, 1, 0, 180deg);
    animation: loader2 1.5s infinite;
`;
export const StyledIconPound = styled(CurrencyPound)`
    @keyframes loader3 {
        69% {
            transform: rotate3d(0, 1, 0, 180deg);
            background-color: black;
        }

        100% {
            transform: rotate3d(0, 1, 0, 0deg);
            background-color: rgba(0, 249, 158, 1);
        }
    }
    color: black;
    background-color: rgb(0, 0, 0);
    font-size: 15px;
    border: 3px solid black;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    padding: 5px;
    margin: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate3d(0, 1, 0, 180deg);
    animation: loader3 1.5s infinite;
`;