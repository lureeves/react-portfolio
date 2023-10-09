import React, { useState } from 'react';

const JokeGenerator: React.FC = () => {
    const [joke, setJoke] = useState({ category: '', setup: '', delivery: '' });

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
        <div id="joke_generator" className="bg-light">
            <button onClick={fetchJoke}>Generate Joke</button>
            <p>{`Category: ${joke.category}`}</p>
            <p>{joke.setup}</p>
            <p>{joke.delivery}</p>
        </div>
    );
}

export default JokeGenerator;
