
import React from 'react';
import FloatingParticles from './FloatingParticles';

interface HeroSectionProps {
  language: 'th' | 'en';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const content = {
    th: {
      greeting: 'สวัสดี ฉันคือ',
      name: 'Aunyamon Plunsungket',
      subtitle: 'Frontend Developer',
      description: 'ยินดีต้อนรับสู่เว็บไซต์แสดงผลงานของฉัน ที่รวบรวมโปรเจกต์และทักษะทางด้านการพัฒนาเว็บไซต์',
      cta: 'ดูผลงานของฉัน'
    },
    en: {
      greeting: 'Hello, I\'m',
      name: 'Aunyamon Plunsungket',
      subtitle: 'Frontend Developer',
      description: 'Welcome to my portfolio website showcasing my projects and skills in web development',
      cta: 'View My Work'
    }
  };

  const currentContent = content[language];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tech-slate via-tech-slate-light to-gray-900 overflow-hidden">
      <FloatingParticles />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <p className="text-tech-cyan text-lg md:text-xl mb-4 font-light">
            {currentContent.greeting}
          </p>
          
          <h1 className="gradient-text text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight">
            {currentContent.name}
          </h1>
          
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            {currentContent.subtitle}
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            {currentContent.description}
          </p>
          
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-4 bg-tech-cyan text-tech-slate font-semibold rounded-full hover:bg-tech-cyan/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-tech-cyan/25"
          >
            {currentContent.cta}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-tech-cyan rounded-full flex justify-center">
          <div className="w-1 h-3 bg-tech-cyan rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
