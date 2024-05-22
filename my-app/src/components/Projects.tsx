import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "./device";

export const ProjectContainer = styled.div`
    background-color: #EAEAEA;
    border-radius: 10px;
    width: 300px;
    height: fit-content;
    margin: 25px auto 25px;
    padding: 10px;
    position: relative;

    @media${device.tablet}{
        width: 700px;
    }

    @media${device.laptop}{
        width: 900px;
    }

    @media${device.laptopLarge}{
        width: 1280px;
    }

    @media${device.desktop}{
        width: 1500px;
    }
`;

export const ProjectInfo = styled.div`
    display: flex;
    overflow: hidden;
    background-color: #262227;
    border-radius: 10px;
    flex-direction: column-reverse;
    padding-bottom: 4rem;

    @media${device.laptop}{
        height: 770px;
    }

    @media${device.laptopLarge}{
        height: 525px;
        justify-content: space-between;
        flex-direction: row;
        padding-bottom: 0;
    }
`;

export const ProjectText = styled.div`
    margin: 0rem 2rem 2rem 2rem; 
    font-size: 20px;
    color: white;
    top: 10%;

    @media${device.laptopLarge}{
        width: 35%;
        margin-top: 2rem;
    }
`

export const ProjectHeader = styled.h2`
    font-size: 26px;
    font-weight: bold;
    margin-block-end: 0.5em;
`

export const ProjectLink = styled(Link)`
    margin-right: 1rem;
`;

export const ProjectImage = styled.div`
    background-color: #262227;
    display: flex;
    justify-content: center;
    align-items: center;

    @media${device.tablet}{
        overflow: hidden;
        max-height: 525px;
    }

    // @media${device.laptop}{
    //     overflow: hidden;
    //     max-height: 525px;
    // }

    @media${device.laptopLarge}{
        overflow: unset;
        background-color: rgb(36, 32, 37);
        width: 65%;
    }

    @media${device.desktop}{
        background-color: #262227;
    }
`

export const ProjectImagePreview =  styled.img`
    max-width: 300px;
    margin: auto;
    padding: 0 1rem;

    @media${device.tablet}{
        max-width: 775px;
    }

    @media${device.laptop}{
        max-width: 900px;
    }
    
    @media${device.laptopLarge}{
        max-width: 800px;
    }

    @media${device.desktop}{
        max-width: 1000px;
    }
`

export const ProjectList = styled.li`
    padding: 0.5rem 0;
    line-height: 1.3;
`

export const ProjectListContainer = styled.ul`
    margin: 0;
    padding-inline-start: 20px;    

    @media${device.tablet}{
        padding-inline-start: 40px;
    }
`

export const ProjectIcons = styled.div`
    position: absolute;
    bottom: 2rem;
`

export const Spacer = styled.div`
    width: 40px
`

export const Line = styled.div`
    height: 50%;
    width: 5px;
    border-radius: 50px;
    background-color: #EAEAEA;
    margin: 8rem 0 0 0;
`