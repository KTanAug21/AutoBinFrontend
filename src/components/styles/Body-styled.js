import styled from "styled-components";
import { theme } from "../../theme";

export const StyledBody = styled.div`
    background: ${({theme})=>theme.colors.body};
    width:100%;
    max-width: 100%;
    padding: 20px 20px;
    margin: 0 auto;
    display: flex;
  

    & > div,
    & > ul {
        flex: 1;
    }

    /* Once max-wdith is reached, stack the elements as row */
    @media( max-width: ${({theme}) => theme.mobile} ){
        flex-direction: column;
        text-align: center;
    }
`;