import React from "react";
import {
    BannerContainer,
    BannerImage,
    Container,
    Image,
    TextContainer,
    BannerText
} from './Banner.tsx'

function Banner() {
    return (
        <BannerContainer >
            <Container>
                <Image src="./img/AaronHo.jpeg"></Image>
                <TextContainer>
                    <BannerText>I am software developer that graduated from University of Washington in Informatics. <br /><br /> I am a skilled front-end developer that priotizes user needs and creating wonderful user experience.</BannerText>
                </TextContainer>
            </Container>
            <BannerImage src="/img/Sunset-in-Seattle-1.jpg"/>
        </BannerContainer>
    ) 
}

export default Banner;