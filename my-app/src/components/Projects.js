import React from "react";
import TextEditor from "./TextEditor";
import projectData from "../data/projects.json";
import {
    ProjectContainer,
    ProjectInfo,
    ProjectText,
    ProjectHeader,
    ProjectButton,
    ProjectButtonLink,
    ProjectImagePreview,
    ProjectList
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

    const list = (data.description).map((item, i) => {
        return <ProjectList key={i}>{TextEditor(item)}</ProjectList>
    })

    return(
        <ProjectContainer>
            <ProjectInfo>
                <ProjectText className="website_text">
                    <div>
                        <ProjectHeader>{props.title}</ProjectHeader>
                        <ul>
                            {list}
                        </ul>
                    </div>
                    {/* <ProjectButtonLink href={data.link} target="_blank" rel="noopener noreferrer"><ProjectButton className="website_button">View Project</ProjectButton></ProjectButtonLink> */}
                </ProjectText>
                <ProjectImagePreview 
                    src={
                        data.displayImage
                        // data.displayImage[0]
                    }
                    alt={props.title + " Website Image"}
                    className="website_image"
                />
            </ProjectInfo>
        </ProjectContainer>
    )
}

export default Projects;