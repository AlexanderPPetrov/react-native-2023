import Header from "./Header";
import Container from "./Container";
import Body from "./Body";
import React from "react";

export default function DefaultLayout({ children }) {
    return (
        <Container>
            <Header/>
            <Body>
                { children }
            </Body>
        </Container>
    );
}