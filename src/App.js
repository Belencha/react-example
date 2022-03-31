import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
    <nav
      style={{
        borderBottom: "solid 1px",
        paddingBottom: "1rem",
      }}
    >
      <Link to="/intro">Intro</Link> |{" "}
      <Link to="/panel">Panel</Link> |{" "}
      <Link to="/thinking-in-react">Thinking in React</Link>
    </nav>
    <div className="App">
      <Outlet />
    </div>
    </>
  );
}

export default App;
