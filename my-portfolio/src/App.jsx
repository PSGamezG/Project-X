import { useState } from "react";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Description from "./Components/Description/Description";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <>
      <Nav />
      <div className="app-container">
        <Description />
        <Projects />
      </div>
    </>
  );
}

export default App;
