import { useState } from "react";
import "./App.css";
import Nav from "./Components/Navbar/Nav";
import Description from "./Components/Description/Description";
import Projects from "./Components/Projects/Projects";
import Chat from "./Components/Chat/Chat";

function App() {
  return (
    <>
      <Nav />
      <div className="app-container">
        <Chat />
        <Description />
        <Projects />
      </div>
    </>
  );
}

export default App;
