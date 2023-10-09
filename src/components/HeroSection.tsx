import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section">
            <h1>
                <span style={{ color: '#000000' }}>Hi, Welcome to My Portfolio</span>
            </h1>
            
            <p>I'm Lukas Reeves, a passionate developer, creator, and thinker.</p>
            
            <a href="#project-section">
                <button className="btn btn-primary mt-3 px-4 py-3">
                    <span style={{ color: '#000000' }}>Check out my projects</span>
                </button>
            </a>
            
        </section>
    );
}

export default HeroSection;
