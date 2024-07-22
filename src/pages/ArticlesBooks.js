

import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ArticlesBooks.css'; 

const ArticlesBooks = () => {
  const navigate = useNavigate();

  const handleBoxClick = (language) => {
    navigate(`/resources/${language}`);
  };

  return (
    <div className="articles-books-page">
      <h1>Articles</h1>
      <div className="language-box" onClick={() => handleBoxClick('english')}>
        <h2>English</h2>
      </div>
      <div className="language-box" onClick={() => handleBoxClick('french')}>
        <h2>French</h2>
      </div>
      <div className="language-box" onClick={() => handleBoxClick('spanish')}>
        <h2>Spanish</h2>
      </div>
      <div className="language-box" onClick={() => handleBoxClick('italian')}>
        <h2>Italian</h2>
      </div>
    </div>
  );
};

export default ArticlesBooks;
