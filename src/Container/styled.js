import styled from "styled-components";
import background from "../images/background.jpg";

export const StyledAppContainer = styled.div`
    background-image: url("${background}");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
`;