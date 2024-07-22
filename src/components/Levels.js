import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Levels.css';

const Levels = ({ language, onLevelSelect }) => {
  const navigate = useNavigate();

  const handleLevelClick = (level) => {
    onLevelSelect(level);
    navigate(`/quiz/${level}/${language}`);
  };

  return (
    <div className="levels">
      <h1>Select a Level</h1>
      <div className="level-boxes">
        {[1, 2, 3, 4].map((level) => (
          <div
            key={level}
            className="level-box"
            onClick={() => handleLevelClick(level)}
          >
            Level {level}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Levels;
