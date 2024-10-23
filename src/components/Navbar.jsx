import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <NavLink to="/services" activeClassName="active">Services</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </nav>
    );
};

export default Navbar;