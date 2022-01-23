import React from "react";
import Button from '@mui/material/Button';
import logo from "./logo.svg";
import "./App.css";
import StyledDiv from "./components/StyledDiv/StyledDiv";
import CustomText from "./components/CustomText/CustomText";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primera tarea
          <br />
          Segunda tarea
        </p>
        
      </header>
      <section className="App-section">
        <Button variant="contained">Hello world</Button>
        <StyledDiv />
        <CustomText text="and what about now?" component="p" wannabe="h1"/>
      </section>
    </div>
  );
}

export default App;
