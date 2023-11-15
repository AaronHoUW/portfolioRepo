import React from "react";
import { Link, NavLink } from 'react-router-dom';


function Navbar() {
    return (
        <nav className="navbar">
            <h1>Aaron Ho</h1>
            <NavLink style={{textDecoration: 'none'}}>
                <Link to="/" className="links" >Home</Link>
                <Link to="/work" className="links">Work</Link>
                <Link to="/about" className="links">About</Link>
            </NavLink>
        </nav>
    )
}

export default Navbar;