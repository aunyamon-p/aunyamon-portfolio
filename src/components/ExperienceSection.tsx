
import React, { useEffect, useRef, useState } from 'react';
import { Briefcase } from 'lucide-react';

interface ExperienceSectionProps {
  language: 'th' | 'en';
}

const ExperienceSection: React.FC<ExperienceSectionProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const content = {
    th: {
      title: 'ประสบการณ์',
      experience: {
        company: 'บริษัท iBOTNOI',
        position: 'ฝึกงาน',
        period: 'มิถุนายน - สิงหาคม 2025',
        details: [
          'พัฒนา Angular components และทำงานร่วมกันในทีม Agile โดยใช้ Git',
          'มีส่วนร่วมในการพัฒนาฟีเจอร์เว็บแอปพลิเคชันจริงและกระบวนการทำงานเป็นทีม'
        ]
      }
    },
    en: {
      title: 'Experience',
      experience: {
        company: 'iBOTNOI Company',
        position: 'Internship',
        period: 'June - Aug 2025',
        details: [
          'Developed Angular components and collaborated in an Agile team using Git',
          'Contributed to real-world web application features and team-based development workflows'
        ]
      }
    }
  };

  const currentContent = content[language];

  return (
    <section ref={sectionRef} id="experience" className="relative py-20 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-20 w-4 h-4 bg-tech-cyan/15 rounded-full animate-float"></div>
        <div className="absolute top-36 right-16 w-5 h-5 bg-tech-cyan/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-24 left-1/3 w-6 h-6 bg-tech-cyan/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-tech-slate mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-tech-cyan mx-auto"></div>
        </div>

        <div className={`max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <div className="border-l-4 border-l-tech-cyan bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-tech-slate to-tech-slate-light flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-tech-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-tech-slate">
                  {currentContent.experience.company}
                </h3>
                <p className="text-tech-cyan font-semibold text-sm">
                  {currentContent.experience.position}
                </p>
              </div>
            </div>
            
            <p className="text-tech-cyan font-semibold mb-4">
              {currentContent.experience.period}
            </p>

            <ul className="space-y-3">
              {currentContent.experience.details.map((detail, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-tech-cyan rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">{detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
