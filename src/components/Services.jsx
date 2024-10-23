import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Services = () => {
    return (
        <div className="content">
            <h1>Our Services</h1>
            <ul>
                <li><Link to="design">Design</Link></li>
                <li><Link to="development">Development</Link></li>
                <li><Link to="marketing">Marketing</Link></li>
            </ul>
            <Outlet /> {/* Renders nested routes */}
        </div>
    );
 };

export default Services;