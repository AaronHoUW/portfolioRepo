import React from "react";
import {
    BannerContainer,
    BannerImage,
    Container,
    Image,
    TextContainer,
    BannerHeader,
    BannerText
} from './Banner.tsx'

function Banner() {
    return (
        <BannerContainer >
            <Container>
                <Image src="https://media.licdn.com/dms/image/D5603AQGSzXjlry071Q/profile-displayphoto-shrink_400_400/0/1698274804771?e=1721260800&v=beta&t=XwfqoT7Ao51IFOCUWqJnGIDaQWwO1EMP3lGGjLLJdFM"></Image>
                <TextContainer>
                    <BannerHeader>Aaron Ho</BannerHeader>
                    <BannerText>I am software developer that graduated from University of Washington in Informatics. <br /><br /> I am a skilled front-end developer that priotizes user needs and creating wonderful user experience.</BannerText>
                </TextContainer>
            </Container>
            <BannerImage src="/img/Sunset-in-Seattle-1.jpg"/>
        </BannerContainer>
    ) 
}

export default Banner;