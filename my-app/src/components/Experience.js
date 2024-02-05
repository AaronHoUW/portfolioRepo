import React from "react";
import {
    Container,
    Info,
    CompanyImage,
    Header,
    TextContainer,
    Date,
    BulletPoint,
    ListContainer,
    Text
} from "./Experience.tsx"

function Experience() {
    return (
        <>
            <Container>
                <Info>
                    <CompanyImage src="./img/uwiSchool.png" alt="Unviersity of Washington iSchool Logo"/>
                    <TextContainer>
                        <Header>Experience One</Header>
                        <Date>Seattle, January 2023 - August 2023</Date>
                        <Text>Simple Placeholder text about the company</Text>
                        <ListContainer>
                            <BulletPoint>a</BulletPoint>
                            <BulletPoint>b</BulletPoint>
                            <BulletPoint>c</BulletPoint>
                        </ListContainer>
                        <Text>Simple Placeholder text about the company</Text>
                    </TextContainer>
                </Info>
            </Container>
        </>
    )
}

export default Experience;