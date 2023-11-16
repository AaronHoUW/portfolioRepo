import styled from "styled-components";

export const ProjectContainer = styled.div`
    background-color: #EAEAEA;
    border-radius: 25px;
    width: 75%;
    height: fit-content;
    margin: 25px auto 25px;
    padding: 10px;
`;

export const ProjectInfo = styled.div`
    justify-content: space-between;
    display: flex;
    padding: 1.5rem 0;
`;

export const ProjectText = styled.div`
    width: 50%;
    margin: 0px 2rem; 
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between
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
`