
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

interface AboutSectionProps {
  language: 'th' | 'en';
}

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const content = {
    th: {
      title: 'เกี่ยวกับฉัน',
      subtitle: 'การศึกษา',
      description: 'ฉันกำลังมุ่งเน้นไปที่การพัฒนาทักษะการพัฒนา Front-end และต้องการเรียนรู้เทคโนโลยี Backend เพิ่มเติม ฉันกำลังมองหาโอกาสฝึกงานที่จะให้ฉันได้รับประสบการณ์จริง ทำงานในโปรเจกตจริง และเรียนรู้การทำงานเป็นทีม ฉันพร้อมเสมอที่จะเรียนรู้เครื่องมือใหม่ๆ เทคโนโลยี และแนวปฏิบัติที่ดีเพื่อเติบโตเป็นนักพัฒนา',
      education: {
        degree: 'ปริญญาตรี วิทยาศาสตร์คอมพิวเตอร์',
        university: 'มหาวิทยาลัยกรุงเทพ',
        faculty: 'คณะเทคโนโลยีและนวัตกรรม',
        year: 'มิถุนายน 2023 - ปัจจุบัน'
      }
    },
    en: {
      title: 'About Me',
      subtitle: 'Education',
      description: "I'm currently focusing on improving my front-end development skills and want to learn more about backend technologies. I'm looking for an internship where I can gain real-world experience, work on real projects, and learn how to collaborate in a team. I'm always open to learning new tools, technologies and best practices to grow as a developer.",
      education: {
        degree: 'Bachelor of Computer Science',
        university: 'Bangkok University',
        faculty: 'Technology and Innovation Faculty',
        year: 'June 2023 - Present'
      }
    }
  };

  const currentContent = content[language];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-slate mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-tech-cyan mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 bg-white/70">
              <p className="text-gray-700 text-lg leading-relaxed">
                {currentContent.description}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-semibold text-tech-slate mb-6">
              {currentContent.subtitle}
            </h3>
            
            <Card className="border-l-4 border-l-tech-cyan bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-3 h-3 bg-tech-cyan rounded-full mt-2"></div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-tech-slate mb-2">
                      {currentContent.education.degree}
                    </h4>
                    <p className="text-gray-600 text-lg mb-1">
                      {currentContent.education.university}
                    </p>
                    <p className="text-gray-600 text-base mb-1">
                      {currentContent.education.faculty}
                    </p>
                    <p className="text-tech-cyan font-medium">
                      {currentContent.education.year}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
