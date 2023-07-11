import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Slider from './components/Slider';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTopButton from './components/ScrollToTopButton';
import projectsData from './projects.json';



const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Slider title={'Mes projets réalisés'} projects={projectsData} />
      <Skills />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
};

export default App;