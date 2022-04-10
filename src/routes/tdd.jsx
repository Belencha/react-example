import React from "react";
import Button from '@mui/material/Button';
import StyledDiv from "../components/StyledDiv/StyledDiv";
import CustomText from "../components/CustomText/CustomText";

export default function Tdd() {
    return (
        <main style={{ padding: "1rem 0" }}>
        <h2>TDD</h2>
        <section className="App-section">
            <Button variant="contained">Click here to practice!</Button>
            <StyledDiv />
            <CustomText text="and... what to test now?" component="p" wannabe="h1"/>
        </section>
        </main>
    );
}