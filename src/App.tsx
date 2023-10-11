import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import JokeGenerator from './components/JokeGenerator.tsx';
import ProjectSection from './components/ProjectSection.tsx';
import './App.css';

function App() {
    return (
        <div className="App">
            <Navbar />

            <HeroSection />

            <JokeGenerator /> 

            <div id="about-me">
                {/* Content for About Me section */}
            </div>
            
            <ProjectSection />

            <Footer />
        </div>
    );
}

export default App;
