import React from "react";
import {
    Container,
    Line,
    Text
} from "./TitleBreak.tsx";

function TitleBreak(props) {
    return (
        <Container>
            <Line />
            <Text>{(props.title) || "Place Holder"}</Text>
            <Line />
        </Container>
    )
}

export default TitleBreak;