import React from "react";
import Navbar from "./components/Navbar";

function App() {
return (
    <>
        <Navbar />
        <div className="banner">
            <img className="bannerImage" src="/img/marygates.jpg"></img>
        </div>
        <div>
            <p>Testing</p>
            <img src="https://remywiki.com/images/thumb/1/17/ROCK_THE_PARTY.png/400px-ROCK_THE_PARTY.png" alt="Rock The Party Jacket" className="drs_ima1" />
        </div> 
    </>
);
}

export default App;
