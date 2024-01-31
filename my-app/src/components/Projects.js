import { AiFillGithub, AiOutlineLink, AiOutlineExport } from "react-icons/ai";
import { IconContext } from "react-icons";
import React, {useState} from "react";
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
    ProjectIcons,
    ProjectImage
} from './Projects.tsx'

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
    // const [projectLinkSize, setProjectLinkSize] = useState("1")

    const list = (data.description).map((item, i) => {
        return <ProjectList key={i}>{TextEditor(item)}</ProjectList>
    })

    return(
        <ProjectContainer>
            <ProjectInfo>
                <ProjectText>
                    <ProjectHeader>{props.title}</ProjectHeader>
                    <ProjectListContainer>{list}</ProjectListContainer>
                    <ProjectIcons>
                        <ProjectLink to={data.github} target="_blank" style={{textDecoration: 'none', color: "white"}}>
                            <IconContext.Provider value={{ size: "2.5em" }}><AiFillGithub className="website_icon_hover"/></IconContext.Provider>
                        </ProjectLink>
                        <ProjectLink to={data.link} target="_blank" style={{textDecoration: 'none', color: "white"}}>
                            <IconContext.Provider value={ {size: "2.5em"} }><AiOutlineLink className="website_icon_hover"/></IconContext.Provider>
                        </ProjectLink>
                    </ProjectIcons>                        
                </ProjectText>
                <ProjectImage onClick={() => document.getElementById(props.title).click()}>
                    <ProjectLink id={props.title} className="website_image_hover" to={data.link} target="_blank" style={{textDecoration: 'none', color: "white"}}>
                        <IconContext.Provider value={{ size: "10em" }}><AiOutlineExport /></IconContext.Provider>
                    </ProjectLink>
                    <ProjectImagePreview 
                        src={data.displayImage}
                        alt={props.title + " Website Image"}
                        className="website_image"
                    />
                </ProjectImage>                
            </ProjectInfo>
        </ProjectContainer>
    )
}

export default Projects;