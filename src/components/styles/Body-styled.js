import styled from "styled-components";
import { theme } from "../../theme";

export const StyledBody = styled.div`
    background: ${({theme})=>theme.colors.body};
    width:100%;
    max-width: 100%;
    padding: 20px 20px;
    margin: 0 auto;

`;