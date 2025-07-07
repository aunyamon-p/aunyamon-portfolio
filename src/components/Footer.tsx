import React from 'react';

interface FooterProps {
  language: 'th' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const content = {
    th: {
      name: 'Aunyamon.P',
      contact: 'ติดต่อ',
      quickLinks: 'ลิงค์ด่วน',
      home: 'หน้าแรก',
      about: 'เกี่ยวกับ',
      skills: 'ทักษะ',
      projects: 'ผลงาน',
      rights: '© 2025 Aunyamon.P. สงวนลิขสิทธิ์ทุกประการ'
    },
    en: {
      name: 'Aunyamon.P',
      contact: 'Contact',
      quickLinks: 'Quick Links',
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      rights: '© 2025 Aunyamon.P. All rights reserved.'
    }
  };

  const currentContent = content[language];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-tech-slate text-white py-16 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-tech-cyan rounded-full animate-float"></div>
        <div className="absolute top-20 right-20 w-24 h-24 bg-tech-cyan/50 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-tech-cyan/30 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-10 right-1/3 w-28 h-28 bg-tech-cyan/20 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-bold text-tech-cyan mb-6">
              {currentContent.name}
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {language === 'th' 
                ? 'Frontend Developer ที่หลงใหลในการสร้างเว็บไซต์ที่สวยงามและใช้งานง่าย'
                : 'Frontend Developer passionate about creating beautiful and user-friendly websites'
              }
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-2xl font-bold text-tech-cyan mb-6">
              {currentContent.quickLinks}
            </h3>
            <div className="space-y-3">
              {[
                { label: currentContent.home, id: 'hero' },
                { label: currentContent.about, id: 'about' },
                { label: currentContent.skills, id: 'skills' },
                { label: currentContent.projects, id: 'projects' }
              ].map((link, index) => (
                <button
                  key={index}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-gray-300 hover:text-tech-cyan transition-colors duration-300 text-left"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-2xl font-bold text-tech-cyan mb-6">
              {currentContent.contact}
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-tech-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>0895992094</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-tech-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>aunyamon.plun@gmail.com</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-tech-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Rangsit Pathumthani, 12120</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400">
            {currentContent.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
