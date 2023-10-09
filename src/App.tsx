import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import JokeGenerator from './components/JokeGenerator.tsx'; // <-- Import the component
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />
            <JokeGenerator /> {/* <-- Render the component */}
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
