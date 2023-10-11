import React from 'react';
import '../App.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" >
            <div className="container-fluid">

                {/* Brand (currently empty, could be used for a logo or brand name) */}
                <a className="navbar-brand" href="main.html"></a>

                {/* Hamburger icon for mobile menu */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar links */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav justify-content-between navbar-items" style={{width: '35%'}}>
                        <li className="nav-item">
                            <a className="nav-link" href="#joke-generator">Joke Generator</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#about-me">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project-section">Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
