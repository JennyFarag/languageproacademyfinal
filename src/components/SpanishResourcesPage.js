

import React from 'react';
import '../styles/SpanishResourcesPage.css'; 

const SpanishResourcesPage = () => {
  return (
    <div className="spanish-resources-page">
      <h1>Artículos en Español</h1>
      <p>Explore nuestra selección de artículos para ayudarle a mejorar sus habilidades en español.</p>
      <div className="resource-section">
        <div className="resource-item">
          <img src="/spanisharticle.png" alt="Spanish RealLife" />
          <h2>Textos para aprender español</h2>
          <p>Superespanol ofrece textos con audio para aprender español, ayudando a mejorar la comprensión auditiva y lectora con materiales auténticos y variados.</p>
          <a href="https://superespanol.com/textos-para-aprender-espanol-con-audio/" target="_blank" rel="noopener noreferrer">Link</a>
        </div>
        <div className="resource-item">
          <img src="/spanisharticle1.png" alt="LearnSpanish" />
          <h2>Textos para apprender español gratis</h2>
          <p>Hablacultura ofrece textos culturales para aprender español, proporcionando recursos que mejoran la comprensión cultural y lingüística a través de la lectura.</p>
          <a href="https://hablacultura.com/cultura-textos-aprender-espanol/" target="_blank" rel="noopener noreferrer">Link</a>
        </div>
        <div className="recent-articles">
          <h3>Artículos Recientes</h3>
          <ul>
            <li><a href="https://www.importanceoflanguages.com/learn-spanish-language/#spanish-alphabet-chart" target="_blank" rel="noopener noreferrer">Learn Spanish Language Basics</a></li>
            <li><a href="https://lingua.com/spanish/reading/" target="_blank" rel="noopener noreferrer">Spanish Texts for Beginners</a></li>
            <li><a href="https://snappyspanish.com/beginner-spanish-stories/" target="_blank" rel="noopener noreferrer">Beginner Spanish Short Stories</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SpanishResourcesPage;
