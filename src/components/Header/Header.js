import React from 'react';
import './styles/header.css';
// component
import Navbar from './Navigation/Navbar';
import About from './About/About';

export default function Header() {
    return (
        <div>
            <Navbar />
            <About />
        </div>
    )
}
