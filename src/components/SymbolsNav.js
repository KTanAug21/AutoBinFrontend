import { StyledSymbolsNav } from "./styles/SymbolsNav-styled";
import { StyledButton } from "./styles/SymbolsNav-styled";
import { useState } from "react";
import { render } from "@testing-library/react";
const SymbolsNav = ({symbolList}) => {

    
    return (
        <StyledSymbolsNav>

            <h3>Symbols Synced</h3>
            <ul>
                {
                    symbolList.map( (symbol)=>{
                        return render( <li>{symbol.pair}</li>);
                    } )
                }
            </ul>
            <div>
                <input type='text' placeholder='New Pair'/>
                <StyledButton>Add</StyledButton>
            </div>
            
        </StyledSymbolsNav>
    );
}

export default SymbolsNav
