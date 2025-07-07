
import React from 'react';

interface SkillsSectionProps {
  language: 'th' | 'en';
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ language }) => {
  const content = {
    th: {
      title: 'ทักษะ',
      categories: {
        programming: 'ภาษาโปรแกรมมิ่ง',
        tools: 'เครื่องมือ',
        frameworks: 'เฟรมเวิร์ก'
      }
    },
    en: {
      title: 'Skills',
      categories: {
        programming: 'Programming Languages',
        tools: 'Tools',
        frameworks: 'Frameworks'
      }
    }
  };

  const skills = {
    programming: ['JavaScript', 'TypeScript', 'C#', 'HTML5', 'CSS3', 'Python'],
    tools: ['Git', 'VS Code', 'Azure', 'Figma', 'Postman', 'Chrome DevTools'],
    frameworks: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Express.js', '.NET']
  };

  const currentContent = content[language];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-tech-slate to-tech-slate-light">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-tech-cyan mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, skillList], index) => (
            <div key={category} className="animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="glass rounded-2xl p-8 h-full bg-white/10 hover:bg-white/15 transition-all duration-300">
                <h3 className="text-2xl font-semibold text-tech-cyan mb-6 text-center">
                  {currentContent.categories[category as keyof typeof currentContent.categories]}
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {skillList.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-white/10 rounded-lg p-3 text-center hover:bg-tech-cyan/20 transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-white font-medium text-sm">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
