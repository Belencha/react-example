import React from "react";
import Button from '@mui/material/Button';
import logo from "./logo.svg";
import "./App.css";

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
        <Button variant="contained">Hello world</Button>
        hey
      </header>
    </div>
  );
}

export default App;
