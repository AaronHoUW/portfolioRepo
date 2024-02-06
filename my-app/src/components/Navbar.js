import React from "react";
import {
    NavBarContainer,
    HashLinks,
    NavBarHeader
} from './Navbar.tsx'

function Navbar() {
    return (
        <NavBarContainer>
            <NavBarHeader>Aaron Ho</NavBarHeader>
            <div style={{'paddingTop': '10px'}}>
                <HashLinks to="/#Projects" smooth>Projects</HashLinks>
                <HashLinks to="/#Experience" smooth>Experience</HashLinks>
            </div>
        </NavBarContainer>
    )
}

export default Navbar;