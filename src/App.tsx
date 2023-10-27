import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectSection from './components/ProjectSection.tsx';
import ContactMe from './components/ContactMe.tsx';
import JokeGenerator from './components/JokeGenerator.tsx';
import Footer from './components/Footer';
import './App.css';

// bun i @emailjs/browser

function App() {
    return (
        <div className="App">
            <Navbar />

            <HeroSection />

            <div id="about-me" className="custom-card mb-5">
                <p className="text-center">Hello, I'm Lukas Reeves, a dynamic Software Engineer with a proven track record in building cutting-edge applications. From devising an AI-powered Flask web application that aids users in memorizing text to generating unique images with the DALL-E 2 API based on stored memorization data, I've embarked on a journey of continual learning and innovation.</p>
                <p className="text-center">My expertise is rooted in an array of databases, frameworks, languages, and tools such as GraphQL, PostgreSQL, Flask, React, Python, and VHDL, to name a few. I'm particularly proud of my contribution at Coding Temple, where my role as a Software Engineer in Residence allowed me to not only refine my technical prowess but also mentor aspiring developers. My personal project during this time stands as a testament to my commitment to delivering exceptional user experiences and innovative solutions.</p>
                <p className="text-center">But, my journey didn't start in tech. My beginnings as an Electrician Helper at Advanced Lighting Resource taught me the importance of precision, teamwork, and project management. I had the privilege of working on significant commercial projects, like the Hangtime roller coaster at Knott's Berry Farm, fostering an analytical approach and keen problem-solving abilities. My time as a Food Server at Lucilles BBQ sharpened my interpersonal skills, reinforcing the value of clear communication and adaptability.</p>
                <p className="text-center">Currently, I'm pursuing my academic interests at California State University, Long Beach, diving deep into digital system design, microprocessor principles, and computational methods in engineering. When I'm not coding or problem-solving, I cherish my moments at church, hiking trails, enjoying the serenity of the beach, or freediving. I’m also an avid Frisbee enthusiast, always up for a game or two!</p>
            </div>
            
            <ProjectSection />

            <ContactMe />

            <JokeGenerator /> 

            <Footer />
        </div>
    );
}

export default App;
