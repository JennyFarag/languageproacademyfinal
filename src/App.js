// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import CourseDetails from './pages/CourseDetails';
import Courses from './pages/Courses';
import LearningResources from './pages/LearningResources';
import NavigationBar from './components/NavigationBar';
import PracticeTests from './pages/PracticeTests';
import ArticlesBooks from './pages/ArticlesBooks';
import Videos from './pages/Videos';
import Forums from './components/Forums'; 
import Register from './components/Register';
import FAQ from './components/FAQ';
import Levels from './components/Levels';
import Quiz from './components/Quiz';
import EnglishResourcesPage from './components/EnglishResourcesPage';
import FrenchResourcesPage from './components/FrenchResourcesPage';
import SpanishResourcesPage from './components/SpanishResourcesPage';
import ItalianResourcesPage from './components/ItalianResourcesPage';


const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/resources/practice-tests" element={<PracticeTests />} />
        <Route path="/resources/articles" element={<ArticlesBooks />} />
        <Route path="/resources/videos" element={<Videos />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/learning-resources" element={<LearningResources />} />
        <Route path="/register" element={<Register />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/levels" element={<Levels />} />
        <Route path="/quiz/:level/:language" element={<Quiz />} />
        <Route path="/practice-tests/level1" element={<Quiz language="English" level={1} />} />
        <Route path="/articles-books" element={<ArticlesBooks />} />
        <Route path="/resources/english" element={<EnglishResourcesPage />} />
        <Route path="/resources/french" element={<FrenchResourcesPage />} />
        <Route path="/resources/spanish" element={<SpanishResourcesPage />} />
        <Route path="/resources/italian" element={<ItalianResourcesPage />} />
        
      </Routes>
    </Router>
  );
};

export default App;
