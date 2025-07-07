
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import Footer from '@/components/Footer';

const Index = () => {
  const [language, setLanguage] = useState<'th' | 'en'>('th');

  const handleLanguageToggle = (lang: 'th' | 'en') => {
    setLanguage(lang);
  };

  return (
    <div className="font-prompt">
      <Navbar language={language} onLanguageToggle={handleLanguageToggle} />
      
      <main>
        <section id="hero">
          <HeroSection language={language} />
        </section>
        <AboutSection language={language} />
        <SkillsSection language={language} />
        <ProjectsSection language={language} />
      </main>
      
      <section id="contact">
        <Footer language={language} />
      </section>
    </div>
  );
};

export default Index;
