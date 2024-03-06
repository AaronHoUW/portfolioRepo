import styled from "styled-components";
import { HashLink } from 'react-router-hash-link';
import { device } from "./device";

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
    flex-direction: column;
`;

export const NavBarItems = styled.div`
    display: flex;
    justify-content: space-between;
`

export const NavBarHeader = styled.h1`
    display: flex;
    flex-direction: row;
    font-weight: bold;
    font-size: 40px;
    margin: 0px;
    margin-left: 2rem;
`;

export const HashLinksContainer = styled.div`
    padding-top: 10px;
    display: none;

    @media${device.tablet}{
        display: block;
    }
`

export const HashLinks = styled(HashLink)`
    text-decoration: none;
    font-size: 24px;
    font-style: normal;
    font-weight: none;
    line-height: normal;
    color: black;
    margin-right: 2rem;
`;

export const DropDownMenu = styled.a`
    display: block;
    margin-right: 1rem;

    @media${device.tablet}{
        display: none;
    }
`

export const MenuList = styled.ul`
    padding-inline-start: 30px;

    @media${device.tablet}{
        display: none;
    }
`

export const MenuItems = styled.li`
    display: block;
    padding: 1rem 0rem;

    @media${device.tablet}{
        display: none;
    }
`