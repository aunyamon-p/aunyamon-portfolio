
import React from 'react';
import { Button } from '@/components/ui/button';

interface LanguageToggleProps {
  language: 'th' | 'en';
  onToggle: (lang: 'th' | 'en') => void;
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <div className="flex bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
      <Button
        variant={language === 'th' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onToggle('th')}
        className={`rounded-full px-3 py-1 text-sm transition-all flex items-center gap-1 ${
          language === 'th' 
            ? 'bg-tech-cyan text-tech-slate shadow-lg' 
            : 'text-white hover:bg-white/20'
        }`}
      >
        <img 
          src="/lovable-uploads/302618d1-1d2e-4eb3-877a-08acdb9d90a4.png" 
          alt="Thailand Flag" 
          className="w-5 h-5 rounded-full object-cover"
        />
        TH
      </Button>
      <Button
        variant={language === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onToggle('en')}
        className={`rounded-full px-3 py-1 text-sm transition-all flex items-center gap-1 ${
          language === 'en' 
            ? 'bg-tech-cyan text-tech-slate shadow-lg' 
            : 'text-white hover:bg-white/20'
        }`}
      >
        <img 
          src="/lovable-uploads/26179352-d8c8-43e4-8211-bf4702579822.png" 
          alt="UK Flag" 
          className="w-5 h-5 rounded-full object-cover"
        />
        EN
      </Button>
    </div>
  );
};

export default LanguageToggle;
