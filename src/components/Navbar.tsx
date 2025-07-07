
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';

interface NavbarProps {
  language: 'th' | 'en';
  onLanguageToggle: (lang: 'th' | 'en') => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageToggle }) => {
  const [activeSection, setActiveSection] = useState('hero');

  const content = {
    th: {
      nav: [
        { id: 'hero', label: 'หน้าแรก' },
        { id: 'about', label: 'เกี่ยวกับฉัน' },
        { id: 'skills', label: 'ทักษะ' },
        { id: 'projects', label: 'ผลงาน' },
        { id: 'contact', label: 'ติดต่อ' }
      ]
    },
    en: {
      nav: [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' }
      ]
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-tech-slate/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="text-tech-cyan text-xl font-bold">
            Aunyamon.P
          </div>

          {/* Navigation and Language Toggle */}
          <div className="flex items-center space-x-4">
            {/* Navigation Menu */}
            <div className="flex space-x-1 bg-white/10 rounded-full p-1">
              {currentContent.nav.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="sm"
                  onClick={() => scrollToSection(item.id)}
                  className={`rounded-full px-4 py-2 text-sm transition-all ${
                    activeSection === item.id
                      ? 'bg-tech-cyan text-tech-slate shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>

            {/* Language Toggle */}
            <LanguageToggle language={language} onToggle={onLanguageToggle} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
