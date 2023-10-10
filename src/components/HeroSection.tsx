import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="hero-section text-center my-5 pt-1 text-dark">

            <div className="my-5">
                <h1 className="gradient-text">
                    <span>Hi, Welcome to My Portfolio</span>
                </h1>

                
                <p>My name is Lukas Reeves, a passionate developer, creator, and thinker.</p>
            </div>

            
            <a href="#project-section">
                <button className="btn btn-primary my-5 px-4 py-3">
                    <span style={{ color: '#FFFFFF' }}>Check out my projects</span>
                </button>
            </a>
            
        </section>
    );
}

export default HeroSection;
