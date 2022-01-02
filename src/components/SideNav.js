import Logo from "./Logo";
import SymbolsNav from "./SymbolsNav";
import { StyledNav } from "./styles/SideNav-styled";
const SideNav = ({symbolList}) => {
    return (
        <StyledNav>
            <Logo />
            <SymbolsNav symbolList={symbolList}/>
           
        </StyledNav>
    )
};

export default SideNav
