import React from "react";
import experienceData from "../data/experience.json";
import TextEditor from "./TextEditor";
import {
    Container,
    Info,
    CompanyImage,
    Header,
    TextContainer,
    ExperienceInfo,
    BulletPoint,
    ListContainer,
    Text
} from "./Experience.tsx"

function Experience() {
    const experienceList = Object.keys(experienceData).reverse().map((experience, i) => <ExperiencePage title={experience} key={i}/>)
    return (
        <>
            {experienceList}
        </>
    )
}

export function ExperiencePage(props) {
    const data = experienceData[props.title];

    const textFormat = (data.text).map((text, i) => {
        if (Array.isArray(text)) {
            const bulletPoints = text.map((bullet, i) => {
                return <BulletPoint key={i}>{TextEditor(bullet)}</BulletPoint>
            })
            return <ListContainer key={i}>{bulletPoints}</ListContainer>
        }
        return <Text key={i}>{TextEditor(text)}</Text>;
    })

    return (
        <Container>
            <Info>
                <CompanyImage src={data.displayImage} alt={data.company + "'s Logo"}/>
                <TextContainer>
                    <Header>{props.title}</Header>
                    <ExperienceInfo>{data.company} · {data.location}, {data.dateStart} - {data.dateEnd}</ExperienceInfo>
                    {textFormat}
                </TextContainer>
            </Info>
        </Container>
    )
}

export default Experience;