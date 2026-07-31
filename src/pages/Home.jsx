import React from 'react';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
import Education from '../sections/Education';
import Services from '../sections/Services';
import Achievements from '../sections/Achievements';
import Certificates from '../sections/Certificates';
import Contact from '../sections/Contact';

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Services />
      <Achievements />
      <Certificates />
      <Contact />
    </main>
  );
}
