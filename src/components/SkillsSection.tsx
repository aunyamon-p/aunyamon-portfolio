
import React, { useEffect, useRef, useState } from 'react';

interface SkillsSectionProps {
  language: 'th' | 'en';
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ language }) => {
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
      title: 'ทักษะของฉัน',
      programmingLanguages: 'ภาษาโปรแกรม',
      librariesFrameworks: 'ไลบรารี/เฟรมเวิร์ก',
      tools: 'เครื่องมือ'
    },
    en: {
      title: 'My Skills',
      programmingLanguages: 'Tech Languages',
      librariesFrameworks: 'Libraries/Frameworks',
      tools: 'Tools'
    }
  };

  const skills = {
    programmingLanguages: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
    librariesFrameworks: ['React', 'Node.js', 'Angular', 'Tailwind'],
    tools: ['Figma', 'VsCode', 'Github']
  };

  const currentContent = content[language];

  return (
    <section ref={sectionRef} id="skills" className="relative py-20 bg-gradient-to-b from-tech-slate to-tech-slate-light overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-24 left-12 w-4 h-4 bg-tech-cyan/20 rounded-full animate-float"></div>
        <div className="absolute top-48 right-20 w-6 h-6 bg-tech-cyan/15 rounded-full animate-float" style={{ animationDelay: '1.2s' }}></div>
        <div className="absolute bottom-28 left-1/4 w-5 h-5 bg-tech-cyan/10 rounded-full animate-float" style={{ animationDelay: '2.4s' }}></div>
        <div className="absolute top-1/3 right-12 w-3 h-3 bg-tech-cyan/25 rounded-full animate-float" style={{ animationDelay: '3.6s' }}></div>
        <div className="absolute bottom-40 right-1/3 w-7 h-7 bg-tech-cyan/15 rounded-full animate-float" style={{ animationDelay: '4.8s' }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}> 
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-tech-cyan mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white h-full backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-tech-cyan to-tech-cyan/70 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-slate mb-4">
                  {currentContent.programmingLanguages}
                </h3>
              </div>
              <div className="flex flex-col w-full gap-3 justify-center">
                {skills.programmingLanguages.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-tech-cyan/10 text-tech-slate rounded-lg text-sm border border-tech-cyan/20 hover:bg-tech-cyan/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Libraries/Frameworks */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white h-full backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-tech-slate to-tech-slate-light flex items-center justify-center">
                  <svg className="w-8 h-8 text-tech-cyan" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-slate mb-4">
                  {currentContent.librariesFrameworks}
                </h3>
              </div>
              <div className="flex flex-col w-full gap-3 justify-center">
                {skills.librariesFrameworks.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-tech-slate/10 text-tech-slate rounded-lg text-sm border border-tech-slate/20 hover:bg-tech-slate/20 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tools */}
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white h-full backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="text-center mb-6">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-tech-slate mb-4">
                  {currentContent.tools}
                </h3>
              </div>
              <div className="flex flex-col w-full gap-3 justify-center">
                {skills.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-100 text-purple-800 rounded-lg text-sm border border-purple-200 hover:bg-purple-200 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
