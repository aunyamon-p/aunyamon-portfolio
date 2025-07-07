
import React from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  language: 'th' | 'en';
  onToggle: (lang: 'th' | 'en') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
        <Button
          variant={language === 'th' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onToggle('th')}
          className={`rounded-full px-3 py-1 text-sm transition-all ${
            language === 'th' 
              ? 'bg-tech-cyan text-tech-slate shadow-lg' 
              : 'text-white hover:bg-white/20'
          }`}
        >
          TH
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => onToggle('en')}
          className={`rounded-full px-3 py-1 text-sm transition-all ${
            language === 'en' 
              ? 'bg-tech-cyan text-tech-slate shadow-lg' 
              : 'text-white hover:bg-white/20'
          }`}
        >
          EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageToggle;
