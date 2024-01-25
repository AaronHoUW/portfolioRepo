import styled from "styled-components";
import { Link } from "react-router-dom";

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
    color: white;
    top: 10%
`

export const ProjectHeader = styled.h2`
    font-size: 28px;
    font-weight: bold;
`

export const ProjectLink = styled(Link)`
    margin-right: 1rem;
`;

export const ProjectImagePreview =  styled.img`
    max-width: 1000px;
    margin: auto;
    padding: 0 0rem;
`

export const ProjectList = styled.li`
    padding: 0.5rem 0;
`

export const ProjectListContainer = styled.ul`
    margin: 0
`

export const ProjectIcons = styled.div`
    margin: 0.5rem 0 0 0.5rem
`