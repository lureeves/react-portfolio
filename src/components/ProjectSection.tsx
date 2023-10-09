import React from 'react';

const ProjectSection = () => {
  return (
    <div className="container" id="project-section">
      <div className="row">
        
        {/* Left column for the 'Rapid Remember' project */}
        <div className="col-lg-4 mb-4 my-sm-3">
          <a href="https://github.com/lureeves/rapid-remember.git" target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
            <div className="card">
              <img src="images/RapidRemember.png" alt="Rapid-Remember" className="mt-4" />
              <div className="card-body text-center">
                <h4 className="card-title">Rapid Remember</h4>
                <p className="card-text">AI powered memorization tool that allows for visual as well as repetitive reinforcement for more efficient learning.</p>
              </div>
              <span className="tooltip">Learn More</span>
            </div>
          </a>
        </div>

        {/* Middle column for the 'Battleship Field Validator' project */}
        <div className="col-lg-4 mb-4 my-sm-3">
          <a href="https://github.com/lureeves/battleship-validator.git" target="_blank" rel="noopener noreferrer" className="card-link-wrapper">
            <div className="card">
              <img src="images/Battlefield.png" alt="Battlefield Validator" className="mt-4" />
              <div className="card-body text-center">
                <h4 className="card-title">Battleship Validator</h4>
                <p className="card-text">Logically intensive program that validates potential board layouts for the well-known board game "Battleship." It receives a given battlefield, a 10x10 matrix, as an nested list and returns true or false depending on the layout and quantity of ships.</p>
              </div>
              <span className="tooltip">Learn More</span>
            </div>
          </a>
        </div>

      </div>
    </div>
  );
}

export default ProjectSection;
