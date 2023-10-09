import { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import './App.css';

function App() {
    const [joke, setJoke] = useState({ category: '', setup: '', delivery: '' });

    // Function to fetch a joke
    const fetchJoke = async () => {
        try {
            const response = await fetch('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=twopart');
            if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
            const data = await response.json();
            setJoke({
                category: data.category,
                setup: data.setup,
                delivery: data.delivery
            });
        } catch (error) {
            console.error('Error fetching Joke:', error);
            // Handle error (e.g., set some state to show an error message)
        }
    };

    return (
        <div className="App">
            <Navbar />
            
            <HeroSection />

            <div id="joke_generator" className="bg-light">
                <button onClick={fetchJoke}>Generate Joke</button>
                <p>{`Category: ${joke.category}`}</p>
                <p>{joke.setup}</p>
                <p>{joke.delivery}</p>
            </div>
            <div id="about_me">
                {/* Content for About Me section */}
            </div>
            <div id="projects">
                {/* Content for Projects section */}
            </div>
            <Footer />
        </div>
    );
}

export default App;
