
import React, { useEffect, useRef, useState } from 'react';

interface AboutSectionProps {
  language: 'th' | 'en';
}

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
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
      title: 'เกี่ยวกับฉัน',
      description: "ฉันกำลังมุ่งเน้นในการพัฒนาทักษะ Front-end และต้องการเรียนรู้เทคโนโลยี Backend เพิ่มเติม ฉันกำลังมองหาตำแหน่งฝึกงานที่จะให้ประสบการณ์การทำงานจริง ทำโปรเจกต์จริง และเรียนรู้การทำงานเป็นทีม ฉันพร้อมเสมอที่จะเรียนรู้เครื่องมือใหม่ ๆ เทคโนโลยี และแนวปฏิบัติที่ดี เพื่อเติบโตในสายงาน Developer ตามที่ตั้งใจไว้",
      education: {
        title: 'การศึกษา',
        period: 'มิถุนายน 2023 - ปัจจุบัน',
        university: 'มหาวิทยาลัยกรุงเทพ',
        faculty: 'คณะเทคโนโลยีและนวัตกรรม',
        major: 'สาขาวิทยาการคอมพิวเตอร์'
      }
    },
    en: {
      title: 'About Me',
      description: "I'm currently focusing on improving my front-end development skills and want to learn more about backend technologies. I'm looking for an internship where I can gain real-world experience, work on real projects, and learn how to collaborate in a team. I'm always open to learning new tools, technologies and best practices to grow as a developer.",
      education: {
        title: 'Education',
        period: 'June 2023 - Present',
        university: 'Bangkok University',
        faculty: 'Technology and Innovation faculty',
        major: 'Major of Computer science'
      }
    }
  };

  const currentContent = content[language];

  return (
    <section ref={sectionRef} id="about" className="relative py-20 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-16 w-5 h-5 bg-tech-cyan/15 rounded-full animate-float"></div>
        <div className="absolute top-40 right-24 w-3 h-3 bg-tech-cyan/20 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute bottom-32 left-1/3 w-6 h-6 bg-tech-cyan/10 rounded-full animate-float" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/3 right-16 w-4 h-4 bg-tech-cyan/25 rounded-full animate-float" style={{ animationDelay: '3.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-tech-slate mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-tech-cyan mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Me Content */}
          <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {currentContent.description}
            </p>
          </div>

          {/* Education Card */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
            <div className="border-tech-slate border-l-4 border-l-tech-cyan bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-tech-cyan rounded-full"></div>
                <h3 className="text-2xl font-bold text-tech-cyan">
                  {currentContent.education.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-tech-slate">
                  {currentContent.education.university}
                </h4>
                <p className="text-tech-slate">
                  {currentContent.education.faculty}
                </p>
                <p className="text-tech-slate">
                  {currentContent.education.major}
                </p>
                <p className="text-tech-cyan font-semibold">
                  {currentContent.education.period}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
