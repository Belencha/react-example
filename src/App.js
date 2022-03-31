import React from "react";
import Button from '@mui/material/Button';
import "./App.css";
import StyledDiv from "./components/StyledDiv/StyledDiv";
import CustomText from "./components/CustomText/CustomText";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard />
      <section className="App-section">
        <Button variant="contained">Hello world</Button>
        <StyledDiv />
        <CustomText text="and what about now?" component="p" wannabe="h1"/>
      </section>
    </div>
  );
}

export default App;
