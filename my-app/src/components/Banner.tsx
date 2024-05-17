import styled from 'styled-components';
import { device } from "./device";

export const BannerContainer = styled.div`
    margin-top: 114px;
    max-height: 400px;
    margin-bottom: 25px;
    position: relative;
    display: flex;
    justify-content: center;
`;

export const BannerImage = styled.img`
    object-fit: cover;
    object-position: 0% 30%;
    width: 100%;
    height: 400px;
    position: relative;
`;

export const Container = styled.div`
    background-color: #EAEAEA;
    border-radius: 10px;
    width: 200px;
    height: 300px;
    margin: 25px 10%;
    padding: 1rem;
    position: absolute;
    display: flex;
    flex-direction: row;
    z-index: 1;
    width: 700px;
    visibility: hidden;

    @media${device.tablet}{
        visibility: visible;
    }
`;

export const BannerLayout = styled.div`
    display: flex;
`

export const Image = styled.img`
    height: 300px;
    width: 300px;
`

export const TextContainer = styled.div`
    margin: 1rem;
`

export const BannerHeader = styled.h1`
    font-size: xxx-large;
    margin-block-start: 0rem;
    margin-block-end: 0;
`

export const BannerText = styled.p`
    font-size: x-large;
    margin-block-start: 0rem;
`