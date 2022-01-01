import styled from "styled-components";

export const StyledHeader = styled.header`
    background: ${ ({theme}) => theme.colors.header };
    padding: 40px 0;
`
/**
 * display flex box
 * align-items center -  top bottom lef right are centered within a box
 * justify-content - distribute items eventlu first item flushed to left, last item flushed to right
 * margin-bottom: 40px; - bottom margin
 */
export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  /* Once max-wdith is reached, stack the elements as row */
  @media( max-width: ${({theme}) => theme.mobile} ){
    flex-direction:column;
  }

  
`

export const StyledLogo = styled.img`
  /* Once max-wdith is reached, add bottom margin because of row stack */
  @media( max-width: ${({theme}) => theme.mobile} ){
    margin-bottom: 40px;
  }
`

export const StyledImage = styled.img`
  width: 375;
  margin-left: 40px;

  @media( max-width: ${({theme}) => theme.mobile} ){
    margin: 40px 0px;
  }
`

