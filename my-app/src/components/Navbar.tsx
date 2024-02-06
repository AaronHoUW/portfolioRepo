import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';

export const NavBarContainer = styled.div`
    z-index: 1;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2.1rem 0em;
    background-color: rgba(234, 234, 234, 0.5);
    overflow: hidden;
    position: fixed;
`;

export const NavBarHeader = styled.h1`
    display: flex;
    flex-direction: row;
    // font-family: 'Libre Bodoni';
    font-weight: bold;
    font-size: 40px;
    margin: 0px;
    margin-left: 2rem;
`;

export const HashLinks = styled(HashLink)`
    text-decoration: none;
    font-size: 24px;
    font-style: normal;
    font-weight: none;
    line-height: normal;
    color: black;
    margin-right: 2rem;
`;