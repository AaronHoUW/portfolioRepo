import styled from "styled-components";

export const ProjectContainer = styled.div`
    background-color: #EAEAEA;
    border-radius: 10px;
    width: fit-content;
    height: fit-content;
    margin: 25px auto 25px;
    padding: 10px;
    position: relative;
    max-height: 525px
`;

export const ProjectInfo = styled.div`
    justify-content: space-between;
    display: inline-block;
    overflow: hidden;
    background-color: #262227;
    height: 525px;
`;

export const ProjectText = styled.div`
    position: absolute;
    width: 50%;
    margin: 0px 2rem; 
    font-size: 20px;
    flex-direction: column;
    justify-content: space-between;
    color: white;
`

export const ProjectHeader = styled.h2`
    font-size: 28px;
    font-weight: bold;
`

export const ProjectButton = styled.button`
    background-color: #727188;
    border-radius: 10px;
    font-size: 20px;
    color: #FFFFFF;
    font-family: 'Libre Caslon Text';
    padding: 1rem;
    border: none;
    align-self: start;
`;

export const ProjectButtonLink = styled.a`
    width: fit-content;
    text-decoration: none;
    color: white;
`;

export const ProjectImagePreview =  styled.img`
    max-width: 1000px;
    margin: auto;
    padding: 0 0rem;
`