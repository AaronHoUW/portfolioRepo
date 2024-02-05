import React from "react";
// Components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Projects from "./components/Projects";
import Experience from "./components/Experience";

function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <Experience />
            <Projects />
        </>
    );
}

export default App;
