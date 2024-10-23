import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import ServiceDetail from './components/ServiceDetail';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />}>
                    <Route path="design" element={<ServiceDetail service="Design" />} />
                    <Route path="development" element={<ServiceDetail service="Development" />} />
                    <Route path="marketing" element={<ServiceDetail service="Marketing" />} />
                </Route>
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    );
};

export default App;