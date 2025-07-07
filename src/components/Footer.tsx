
import React from 'react';
import { Github, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  language: 'th' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    th: {
      quickLinks: 'ลิงก์ด่วน',
      contact: 'ติดต่อ',
      home: 'หน้าแรก',
      about: 'เกี่ยวกับฉัน',
      skills: 'ทักษะ',
      projects: 'ผลงาน',
      email: 'aunyamon.plun@gmail.com',
      phone: '+66 895992094',
      location: 'ปทุมธานี, ประเทศไทย'
    },
    en: {
      quickLinks: 'Quick Links',
      contact: 'Contact',
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      email: 'aunyamon.plun@gmail.com',
      phone: '+66 895992094',
      location: 'Pathum Thani, Thailand'
    }
  };

  const currentContent = content[language];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-tech-slate via-tech-slate-light to-gray-900 text-white pt-16 pb-8 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-20 w-4 h-4 bg-tech-cyan/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-24 w-6 h-6 bg-tech-cyan/15 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 bg-tech-cyan/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-16 w-3 h-3 bg-tech-cyan/25 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-7 h-7 bg-tech-cyan/15 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-20 left-1/3 w-4 h-4 bg-tech-cyan/20 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Aunyamon.P */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-tech-cyan mb-4">Aunyamon.P</h3>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-xl font-bold text-tech-cyan mb-4">{currentContent.quickLinks}</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="text-gray-300 hover:text-tech-cyan transition-colors"
                >
                  {currentContent.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-tech-cyan transition-colors"
                >
                  {currentContent.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="text-gray-300 hover:text-tech-cyan transition-colors"
                >
                  {currentContent.skills}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-gray-300 hover:text-tech-cyan transition-colors"
                >
                  {currentContent.projects}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-xl font-bold text-tech-cyan mb-4">{currentContent.contact}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-tech-cyan" />
                <span
                  className="text-gray-300"
                >
                  {currentContent.email}
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-tech-cyan" />
                <span className="text-gray-300">{currentContent.phone}</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-tech-cyan" />
                <span className="text-gray-300">{currentContent.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2024 Aunyamon Plunsungket. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
