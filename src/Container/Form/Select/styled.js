import styled from "styled-components";

export const StyledSelectContainer = styled.div`
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

export const StyledSelect = styled.select`
    border: 2px solid black;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 70px;
    padding: 20px;
    outline: none;
    text-align: center;
    background: linear-gradient(0deg, rgba(34, 153, 195, 1) 0%, rgba(0, 249, 158, 1) 100%);

    @media (max-width:500px) {
        border-radius: 20px;
        width: 100%;
        margin-bottom: 10px;
    }
`;

export const StyledInput = styled.input`
    border: 2px solid black;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    height: 70px;
    outline: none;
    padding: 20px;
    text-align: center;
    margin-left: -2px;
    min-width: 100px;
    width: 40%;
    background: linear-gradient(0deg, rgba(34, 153, 195, 1) 0%, rgba(0, 249, 158, 1) 100%);

    &:disabled{
        color: black;
    }

    @media (max-width:500px) {
    border: 2px solid black;
    border-radius: 20px;
    height: 70px;
    outline: none;
    padding: 20px;
    text-align: center;
    margin-left: -2px;
    min-width: 100px;
    width: 100%;
    margin-bottom: 10px;
    }
`;