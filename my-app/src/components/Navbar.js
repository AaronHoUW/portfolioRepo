import { AiOutlineCaretDown } from "react-icons/ai";
import { IconContext } from "react-icons";
import React, {useState} from "react";
import {
    NavBarContainer,
    NavBarItems,
    HashLinks,
    HashLinksContainer,
    NavBarHeader,
    DropDownMenu,
    MenuList,
    MenuItems
} from './Navbar.tsx'

function Navbar() {
    const [isClicked, setIsClicked] = useState()

    const onClickMenu = () => {
        setIsClicked(!isClicked)
    }

    return (
        <NavBarContainer className={"navbar_container_" + isClicked}>
            <NavBarItems>
                <NavBarHeader>Aaron Ho</NavBarHeader>
                <HashLinksContainer>
                    <HashLinks to="/#Projects" smooth>Projects</HashLinks>
                    <HashLinks to="/#Experience" smooth>Experience</HashLinks>
                </HashLinksContainer>
                <DropDownMenu onClick={onClickMenu}>
                    <IconContext.Provider value={{ size: "50px" }}><AiOutlineCaretDown className={"navbar_dropdown_" + isClicked}/></IconContext.Provider>
                </DropDownMenu>
            </NavBarItems>
            <MenuList className={"navbar_menu_" + isClicked}>
                <MenuItems><HashLinks to="/#Projects" smooth>Projects</HashLinks></MenuItems>
                <MenuItems><HashLinks to="/#Experience" smooth>Experience</HashLinks></MenuItems>
            </MenuList>
        </NavBarContainer>
    )
}

export default Navbar;