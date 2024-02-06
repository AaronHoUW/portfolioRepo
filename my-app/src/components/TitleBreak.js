import React from "react";
import {
    Container,
    Line,
    Text
} from "./TitleBreak.tsx";

function TitleBreak(props) {
    return (
        <Container id={props.title} className="titlebreak">
            <Line />
            <Text>{(props.title) || "Place Holder"}</Text>
            <Line />
        </Container>
    )
}

export default TitleBreak;