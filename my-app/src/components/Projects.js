import React, { useState } from "react";
import {
    ProjectContainer,
    ProjectInfo,
    ProjectText,
    ProjectHeader,
    ProjectButton
} from './Projects.tsx'

function Projects() {
    // const [projectCounter, setProjectCount] = useState(3);

    const projectList = [...Array(3)].map((e, i) => <ProjectPage key={i}/>)

    return(
        <>
            {projectList}
        </>
    )
}

export function ProjectPage() {
    return(
        <ProjectContainer>
            <ProjectInfo>
                <ProjectText>
                    <div>
                        <ProjectHeader>Title</ProjectHeader>
                        <p>Lorem ipsum dolor sit amet consectetur. Sed sem malesuada sed egestas nibh vitae purus. Dolor pharetra placerat vivamus faucibus nulla odio convallis aliquet urna. Suspendisse quis ridiculus et convallis purus. Sollicitudin sit etiam non montes diam sagittis mauris in.</p>
                    </div>
                    <ProjectButton>View Project</ProjectButton>
                </ProjectText>
                <img src="https://remywiki.com/images/thumb/1/17/ROCK_THE_PARTY.png/400px-ROCK_THE_PARTY.png" alt="Rock The Party Jacket" className="drs_ima1" />
            </ProjectInfo>
        </ProjectContainer>
    )
}

export default Projects;