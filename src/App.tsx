import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import Footer from './components/Footer';
import '/src/App.css';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <Footer />
    </div>
  );
}

export default App;
