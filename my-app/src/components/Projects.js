import React, {useState, useEffect} from "react";
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
    const [hoverState, setHoverState] = useState(false);
    const [displayImage, setDisplayImage] = useState(data.displayImage[0])
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if(count >= 3) {
                setCount(0);
            } else {
                setCount(count + 1);
            }
            if(hoverState) {
                console.log(count);
                setDisplayImage(data.displayImage[count])
            } else {
                setDisplayImage(data.displayImage[0])
            }
        }, 1000);
        return () => clearInterval(interval)
    }, [count]);

    const onHover = async (e) => {
        setCount(0);
        console.log(props.title + " is hovered")
        setHoverState(true);
    }

    const onHoverLeave = (e) => {
        console.log(props.title + " is hovered is off")
        setHoverState(false)
    }

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
                <ProjectImagePreview 
                    onMouseEnter={(e) => onHover(e)}
                    onMouseLeave={(e) => onHoverLeave(e)}
                    src={
                        displayImage
                        // data.displayImage[0]
                    }
                    alt={props.title + " Website Image"}
                    className="website_image"
                />
                {/* <img src="https://remywiki.com/images/thumb/1/17/ROCK_THE_PARTY.png/400px-ROCK_THE_PARTY.png" alt="Rock The Party Jacket" className="drs_ima1" /> */}
            </ProjectInfo>
        </ProjectContainer>
    )
}

export default Projects;