import React from 'react';
import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Process from '../sections/Process';
import Contact from '../sections/Contact';

export const Home: React.FC = () => {
  return (
    <main className="w-full overflow-hidden">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Process />
      <Contact />
    </main>
  );
};

export default Home;
