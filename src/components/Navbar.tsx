import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  language: 'th' | 'en';
  onLanguageToggle: (lang: 'th' | 'en') => void;
}

const Navbar: React.FC<NavbarProps> = ({ language, onLanguageToggle }) => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-tech-slate/95 backdrop-blur-md border-b border-white/10 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name - Now clickable */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-tech-cyan text-xl font-bold hover:text-tech-cyan/80 transition-colors"
          >
            Aunyamon.P
          </button>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
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
          </div>

          {/* Desktop Language Toggle - Right */}
          <div className="hidden md:flex">
            <LanguageToggle language={language} onToggle={onLanguageToggle} />
          </div>

          {/* Mobile Menu - Language Toggle and Hamburger */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageToggle language={language} onToggle={onLanguageToggle} />
            
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:bg-white/20 p-2"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-tech-slate/95 backdrop-blur-md border-b border-white/10 shadow-lg">
            <div className="px-4 py-4 space-y-2">
              {currentContent.nav.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left justify-start rounded-lg px-4 py-3 text-sm transition-all ${
                    activeSection === item.id
                      ? 'bg-tech-cyan text-tech-slate shadow-lg'
                      : 'text-white hover:bg-white/20'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
export default Navbar;
