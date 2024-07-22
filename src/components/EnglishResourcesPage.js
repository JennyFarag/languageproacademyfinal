// src/components/EnglishResourcesPage.js

import React from 'react';
import '../styles/EnglishResourcesPage.css';

const EnglishResourcesPage = () => {
  return (
    <div className="english-resources-page">
      <h1>Articles in English</h1>
      <p>Explore our selection of articles and resources to help you improve your English language skills.</p>
      <div className="resource-section">
        <div className="resource-item">
          <img src="/englisharticle.png" alt="Lessons of the Day" />
          <h2>RealLife English</h2>
          <p>Our mission is to help you not just learn English, but to LIVE IT. We offer mutiple articles, videos, and podcasts to enrich your learning experience. Explore more with the RealLife link below.</p>
          <a href="https://reallifeglobal.com/english-articles/" target="_blank" rel="noopener noreferrer">Link</a>
        </div>
        <div className="resource-item">
          <img src="/englisharticle1.png" alt="Learning English" />
          <h2>LearnEnglish</h2>
          <p>Improve your reading comprehension and vocabulary with articles on diverse topics, including global issues and festivals. Each article offers interactive exercises for different levels for English learners.</p>
          <a href="https://learnenglish.britishcouncil.org/general-english/magazine-zone" target="_blank" rel="noopener noreferrer">Link</a>
        </div>
        <div className="recent-articles">
          <h3>Recent Articles</h3>
          <ul>
            <li><a href="https://learningenglish.voanews.com/z/952" target="_blank" rel="noopener noreferrer">Lessons of the day</a></li>
            <li><a href="https://www.newsinlevels.com" target="_blank" rel="noopener noreferrer">English news and easy articles for students of English</a></li>
            <li><a href="https://www.englishclub.com/esl-articles/200003.php" target="_blank" rel="noopener noreferrer">Improve your english through Reading</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EnglishResourcesPage;
