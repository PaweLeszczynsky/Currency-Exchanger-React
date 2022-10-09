import styled, { css } from "styled-components";

export const StyledSummaryInfo = styled.div`
    border: 0 solid black;
    border-radius: 20px;
    min-height: 70px;
    max-width: 600px;
    background: linear-gradient(0deg, rgb(65 255 186) 0%, rgb(91 116 255) 100%);
    vertical-align: middle;
    padding: 0;
    display: flex;
    text-align: center;
    line-height: 1.5;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin: 10px;
    font-size: 0;
    opacity: 0;
    transition: all 1s;

    ${({ visible }) => visible && css`
        border: 2px solid black;
        min-height: 70px;
        padding: 20px;
        font-size: medium;
        opacity: 1;
        transition: all 1s;
    `}
`;