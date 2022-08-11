import { Route, Routes } from "react-router-dom";

import Navbar from "./components/navbar/Navbar";
import HomePage from "./components/home/HomePage";
import Projects from "./components/projects/Projects";

import "./App.css";
import About from "./components/about/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
