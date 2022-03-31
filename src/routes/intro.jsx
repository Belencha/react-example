import React from "react";
import Button from '@mui/material/Button';
import StyledDiv from "../components/StyledDiv/StyledDiv";
import CustomText from "../components/CustomText/CustomText";

export default function Intro() {
    return (
        <main style={{ padding: "1rem 0" }}>
        <h2>Intro</h2>
        <section className="App-section">
            <Button variant="contained">Hello world</Button>
            <StyledDiv />
            <CustomText text="and what about now?" component="p" wannabe="h1"/>
        </section>
        </main>
    );
}