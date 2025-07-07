
import React, { useState } from 'react';
import LanguageToggle from '@/components/LanguageToggle';
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
      <LanguageToggle language={language} onToggle={handleLanguageToggle} />
      
      <main>
        <HeroSection language={language} />
        <AboutSection language={language} />
        <SkillsSection language={language} />
        <ProjectsSection language={language} />
      </main>
      
      <Footer language={language} />
    </div>
  );
};

export default Index;
