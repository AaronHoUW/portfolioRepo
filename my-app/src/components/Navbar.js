import React from "react";
import {
    NavBarContainer,
    HashLinks,
    NavBarHeader
} from './Navbar.tsx'

function Navbar() {
    return (
        <NavBarContainer>
            <HashLinks to="#top"><NavBarHeader>Aaron Ho</NavBarHeader></HashLinks>
            <div style={{'paddingTop': '10px'}}>
                <HashLinks to="/#top" smooth>Home</HashLinks>
                <HashLinks to="/#Projects" smooth>Projects</HashLinks>
                <HashLinks to="/#Experience" smooth>Experience</HashLinks>
            </div>
        </NavBarContainer>
    )
}

export default Navbar;