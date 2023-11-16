import React from "react";
import { Link, NavLink } from 'react-router-dom';
import {
    NavBarContainer,
    Links,
    NavBarHeader
} from './Navbar.tsx'

function Navbar() {
    return (
        <NavBarContainer>
            <NavBarHeader>Aaron Ho</NavBarHeader>
            <div style={{'paddingTop': '10px'}}>
                <Links to="/">Home</Links>
                <Links to="/work">Work</Links>
                <Links to="/about">About</Links>
            </div>
        </NavBarContainer>
    )
}

export default Navbar;