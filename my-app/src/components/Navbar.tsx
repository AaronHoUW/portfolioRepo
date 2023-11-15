import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavBarContainer = styled.nav`
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem 0em;
    background-color: F8F6F4;
    overflow: hidden;
`;

export const NavBarHeader = styled.h1`
    display: flex;
    flex-direction: row;
    font-family: 'Libre Bodoni';
    font-weight: bold;
    font-size: 40px;
    margin: 0px;
    padding-left: 2rem;
`;

export const Links = styled(Link)`
    text-decoration: none;
    font-size: 24px;
    font-style: normal;
    font-weight: none;
    line-height: normal;
    color: black;
    padding-right: 2rem;
`;