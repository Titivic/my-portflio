import React from 'react';
import '../styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar sticky-header navbar-light bg-transparent py-3 bg-light">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar</a>
                
                <nav className="nav justify-content-end">
                    <a className="nav-link active" href="#">resume.</a>
                    <a className="nav-link active" href="#">contact me.</a>
                </nav>
            </div>
        </nav>
    )
}
