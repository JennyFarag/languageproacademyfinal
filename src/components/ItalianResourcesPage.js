
import React from 'react';
import '../styles/ItalianResourcesPage.css'; 

const ItalianResourcesPage = () => {
  return (
    <div className="italian-resources-page">
      <h1>Articoli in Italiano</h1>
      <p>Esplora la nostra selezione di articoli per aiutarti a migliorare le tue competenze in italiano.</p>
      <div className="resource-section">
        <div className="resource-item">
          <img src="/italienarticle.png" alt="Italian RealLife" />
          <h2>Italian Articles</h2>
          <p>Rocket Languages offre una guida dettagliata sugli articoli italiani, aiutando a comprendere l'uso corretto degli articoli determinativi e indeterminativi attraverso esempi pratici e spiegazioni grammaticali.</p>
          <a href="https://www.rocketlanguages.com/italian/grammar/italian-articles" target="_blank" rel="noopener noreferrer">Link</a>
        </div>
        <div className="resource-item">
          <img src="/italienarticle2.png" alt="LearnItalian" />
          <h2>Italian articles for beginners</h2>
          <p>Preply offre articoli per principianti in italiano, aiutando ad apprendere le basi della lingua con spiegazioni semplici e chiare, accompagnate da esempi pratici.</p>
          <a href="https://preply.com/en/blog/italian-articles-for-beginners/" target="_blank" rel="noopener noreferrer">Link</a>
        </div>
        <div className="recent-articles">
          <h3>Articoli Recenti</h3>
          <ul>
            <li><a href="https://mangolanguages.com/resources/learn/grammar/italian/what-are-the-articles-in-italian" target="_blank" rel="noopener noreferrer">What are the articles in Italian?</a></li>
            <li><a href="https://www.busuu.com/en/italian/articles" target="_blank" rel="noopener noreferrer">Articles in Italian</a></li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ItalianResourcesPage;
