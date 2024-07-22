

import React from 'react';
import { useParams } from 'react-router-dom';

const ResourcesPage = () => {
  const { language } = useParams();

  return (
    <div>
      <h1>{language.charAt(0).toUpperCase() + language.slice(1)} Learning Resources</h1>
      <p>More information about to come...</p>
    </div>
  );
};

export default ResourcesPage;
