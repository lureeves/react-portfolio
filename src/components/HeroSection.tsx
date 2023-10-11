import React, { useState, useEffect } from 'react';

const HeroSection: React.FC = () => {
    const [currentWord, setCurrentWord] = useState('');
    const [opacity, setOpacity] = useState(1);
    const words = ["strategist", "creator", "thinker", "leader", "programmer"];
    let currentIndex = 0;
    
    const changeWord = () => {
        setOpacity(0); // Start fade out

        setTimeout(() => { 
            setCurrentWord(' ' + words[currentIndex]); // Adding space before the word
            currentIndex++;

            if (currentIndex === words.length) {
                currentIndex = 0; // Start over
            }

            setOpacity(1); // Start fade in
        }, 1500); // halfway through the interval
    };

    useEffect(() => {
        const interval = setInterval(changeWord, 3000);  // Rotate every 3 seconds

        return () => clearInterval(interval); // Cleanup on component unmount
    }, []); 

    return (
        <section className="hero-section text-center my-5 pt-1 text-dark">
            <div className="my-5 pb-5">
                <h1 className="gradient-text">
                    <span>Hi, Welcome to My Portfolio</span>
                </h1>

                <h2 >
                    My name is Lukas Reeves, I am a <span className="word">{currentWord}</span>
                </h2>
            </div>

            <a href="#project-section">
                <button className="custom-btn">
                    <span>Check out my projects</span>
                </button>
            </a>
        </section>
    );
}

export default HeroSection;
