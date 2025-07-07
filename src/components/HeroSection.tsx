
import React, { useState, useEffect } from 'react';
import FloatingParticles from './FloatingParticles';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  language: 'th' | 'en';
}

const HeroSection: React.FC<HeroSectionProps> = ({ language }) => {
  const [displayText, setDisplayText] = useState('');
  const [showRest, setShowRest] = useState(false);

  const content = {
    th: {
      greeting: 'สวัสดี ฉันคือ',
      name: 'Aunyamon Plunsungket',
      subtitle: 'Frontend Developer',
      description: 'ยินดีต้อนรับสู่เว็บไซต์แสดงผลงานของฉัน',
      cta: 'ดูผลงานของฉัน',
      github: 'GitHub โปรไฟล์'
    },
    en: {
      greeting: 'Hello, I\'m',
      name: 'Aunyamon Plunsungket',
      subtitle: 'Frontend Developer',
      description: 'Welcome to my portfolio website showcasing my projects and skills in web development',
      cta: 'View My Work',
      github: 'GitHub Profile'
    }
  };

  const currentContent = content[language];
  const textToType = `${currentContent.greeting} ${currentContent.name}`;

  useEffect(() => {
    setDisplayText('');
    setShowRest(false);
    
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < textToType.length) {
        setDisplayText(textToType.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
        setTimeout(() => {
          setShowRest(true);
        }, 500);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [textToType]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-tech-slate via-tech-slate-light to-gray-900 overflow-hidden">
      <FloatingParticles />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="gradient-text text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight min-h-[1.2em]">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          
          {showRest && (
            <div className="animate-fade-in">
              <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
                {currentContent.subtitle}
              </h2>
              
              <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
                {currentContent.description}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="w-full sm:w-auto min-w-[200px] px-8 py-4 bg-tech-cyan text-tech-slate font-semibold rounded-full hover:bg-tech-cyan/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-tech-cyan/25"
                >
                  {currentContent.cta}
                  <svg className="ml-2 w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                
                <Button
                  asChild
                  variant="outline"
                  className="w-full sm:w-auto min-w-[200px] px-8 py-4 border-2 border-tech-cyan text-tech-cyan bg-transparent hover:bg-tech-cyan hover:text-tech-slate font-semibold rounded-full transition-all duration-300 transform hover:scale-105"
                >
                  <a href="https://github.com/aunyamon-p" target="_blank" rel="noopener noreferrer">
                    {currentContent.github}
                    <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.57v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </Button>
              </div>
            </div>
          )}
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
