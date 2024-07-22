

import React from 'react';
import '../styles/FrenchResourcesPage.css'; 

const FrenchResourcesPage = () => {
  return (
    <div className="french-resources-page">
      <h1>Articles en Français</h1>
      <p>Explorez notre sélection d'articles pour vous aider à améliorer vos compétences en français.</p>
      <div className="resource-section">
        <div className="resource-item">
          <img src="/frencharticle.png" alt="French RealLife" />
          <h2>Les articles cours et exercices en ligne</h2>
          <p>Ce ressource offre une vaste sélection d'articles et de ressources pour l'apprentissage du français, incluant des exercices de grammaire, des leçons de vocabulaire, et des activités interactives.</p>
          <a href="https://www.lepointdufle.net/p/articles.htm" target="_blank" rel="noopener noreferrer">Link</a>
        </div>
        <div className="resource-item">
          <img src="/frencharticle1.png" alt="LearnFrench" />
          <h2>Maîtriser les articles en français </h2>
          <p>Découvrez un guide complet sur les articles en français, comprenant les types, fonctions et particularités, ainsi que des exemples et exercices pratiques pour maîtriser leur usage.</p>
          <a href="https://talkpal.ai/fr/grammar/maitriser-les-articles-en-francais-guide-complet-et-detaille/" target="_blank" rel="noopener noreferrer">Link</a>
        </div>
        <div className="recent-articles">
          <h3>Articles Récents</h3>
          <ul>
            <li><a href="https://enseigner.tv5monde.com/articles-dossiers" target="_blank" rel="noopener noreferrer">Enseigner le français</a></li>
            <li><a href="https://www.orthographiq.com/blog/apprendre-le-francais" target="_blank" rel="noopener noreferrer">Ressources pour apprendre le français</a></li>
            
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FrenchResourcesPage;
