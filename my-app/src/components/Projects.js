import { AiFillGithub, AiOutlineLink } from "react-icons/ai";
import { IconContext } from "react-icons";
import React from "react";
import TextEditor from "./TextEditor";
import projectData from "../data/projects.json";
import {
    ProjectContainer,
    ProjectInfo,
    ProjectText,
    ProjectHeader,
    ProjectLink,
    ProjectImagePreview,
    ProjectList,
    ProjectListContainer,
    ProjectIcons
} from './Projects.tsx'
import { Link } from "react-router-dom";

function Projects() {
    const projectList = Object.keys(projectData).map((website, i) => <ProjectPage title={website} key={i}/>)

    return(
        <>
            {projectList}
        </>
    )
}

export function ProjectPage(props) {
    const data = projectData[props.title];

    const list = (data.description).map((item, i) => {
        return <ProjectList key={i}>{TextEditor(item)}</ProjectList>
    })

    return(
        <ProjectContainer>
            <ProjectInfo>
                <ProjectText className="website_text">
                    <div>
                        <Link to={data.link} target="_blank" style={{textDecoration: 'none', color: "white"}}>
                            <ProjectHeader>{props.title}</ProjectHeader>
                        </Link>
                        <ProjectListContainer>{list}</ProjectListContainer>
                        <ProjectIcons>
                            <ProjectLink to={data.github} target="_blank" style={{textDecoration: 'none', color: "white"}}>
                                <IconContext.Provider value={{ size: "2em" }}><AiFillGithub /></IconContext.Provider>
                            </ProjectLink>
                            <ProjectLink to={data.link} target="_blank" style={{textDecoration: 'none', color: "white"}}>
                                <IconContext.Provider value={{ size: "2em" }}><AiOutlineLink /></IconContext.Provider>
                            </ProjectLink>
                        </ProjectIcons>                        
                    </div>
                </ProjectText>
                <ProjectImagePreview 
                    src={data.displayImage}
                    alt={props.title + " Website Image"}
                    className="website_image"
                />
            </ProjectInfo>
        </ProjectContainer>
    )
}

export default Projects;