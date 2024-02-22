import styled from "styled-components";
import { device } from "./device";

export const Container = styled.div`
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

export const Info = styled.div`
    display: flex;
    overflow: hidden;
    background-color: #262227;
    border-radius: 10px;
    flex-direction: column;

    @media${device.tablet}{
        flex-direction: row-reverse;
    }

    @media${device.laptopLarge}{
        flex-direction: row;
    }
`;

export const CompanyImage =  styled.img`
    height: 200px;
    width: 200px;
    margin: 30px 0 0 50px;

    @media${device.tablet}{
        margin: 20px 20px 0 0;
    }

    @media${device.laptopLarge}{
        margin: 20px 0 0 20px;
    }
`

export const TextContainer = styled.div`
    margin: 1rem 1rem; 
    font-size: 20px;
    color: white;
    top: 10%

    @media${device.tablet}{
        width: 100%;
        margin: 2rem 2rem;
    }
`

export const Header = styled.h2`
    font-size: 28px;
    font-weight: bold;
    margin-block: 0 0.5rem;
`

export const ExperienceInfo = styled.p`
    font-size: 18px;
    margin-block: 0;
    color: rgb(169, 169, 169);;
`

export const BulletPoint = styled.li`
    padding: 0.5rem 0;
    line-height: 1.3;
`

export const ListContainer = styled.ul`
    margin: 0;
    padding-inline-start: 30px;

    @media${device.tablet}{
        padding-inline-start: 40px;
    }
`

export const Text = styled.p`
    margin-block-end: 0;
`