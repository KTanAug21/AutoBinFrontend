import styled from "styled-components";
import { theme } from "../../theme";

export const StyledSymbolsNav = styled.div`
    background: ${({theme})=>theme.colors.header};
    border-radius: 10px 0 0 10px;
    padding: 20px;

`;

export const StyledButton = styled.button`
    border-radius: 10px 5px;
    border: none;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    cursor:pointer;
    font-size: 1em;
    font-weight:700;
    padding: 10px 8px;
    background-color:grey;
    color:${({theme})=>theme.colors.header};
    &:hover {
        opacity: 0.9;  // lightness
        transform: scale(0.98); // make smaller
    }
`