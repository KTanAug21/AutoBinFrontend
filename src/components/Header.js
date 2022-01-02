import React from 'react';
import { StyledHeader } from './styles/Header-styled';
import Logo from './Logo';

const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <div>
                <h1>AutoBin</h1>
                <p>Automate your binance reverse orders in a timely manner.</p>
            </div>
        </StyledHeader>
    );
}

export default Header;
