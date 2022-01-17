import React from 'react';
import '../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-light bg-transparent py-3 bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">titilayo.</a>
                
                <nav className="nav justify-content-end">
                    <a className="nav-link" href="#">resume.</a>
                    <a className="nav-link" href="#contact">contact me.</a>
                </nav>
            </div>
        </nav>
    )
}
