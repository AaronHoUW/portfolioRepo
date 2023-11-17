import React from "react";
import projectData from "../data/projects.json";
import {
    ProjectContainer,
    ProjectInfo,
    ProjectText,
    ProjectHeader,
    ProjectButton,
    ProjectButtonLink,
    ProjectImagePreview
} from './Projects.tsx'

function Projects() {
    // const [projectCounter, setProjectCount] = useState(3);
    const projectList = Object.keys(projectData).map((website, i) => <ProjectPage title={website} key={i}/>)

    return(
        <>
            {projectList}
        </>
    )
}

export function ProjectPage(props) {
    const data = projectData[props.title];
    console.log(data);
    return(
        <ProjectContainer>
            <ProjectInfo>
                <ProjectText>
                    <div>
                        <ProjectHeader>{props.title}</ProjectHeader>
                        <p>Lorem ipsum dolor sit amet consectetur. Sed sem malesuada sed egestas nibh vitae purus. Dolor pharetra placerat vivamus faucibus nulla odio convallis aliquet urna. Suspendisse quis ridiculus et convallis purus. Sollicitudin sit etiam non montes diam sagittis mauris in.</p>
                    </div>
                    <ProjectButtonLink href={data.link} target="_blank" rel="noopener noreferrer"><ProjectButton className="website_button">View Project</ProjectButton></ProjectButtonLink>
                </ProjectText>
                <ProjectImagePreview src={data.displayImage} alt={props.title + " Website Image"} className="website_image"/>
                {/* <img src="https://remywiki.com/images/thumb/1/17/ROCK_THE_PARTY.png/400px-ROCK_THE_PARTY.png" alt="Rock The Party Jacket" className="drs_ima1" /> */}
            </ProjectInfo>
        </ProjectContainer>
    )
}

export default Projects;