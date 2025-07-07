
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
      description: 'ฉันเป็น Frontend Developer ที่มีความหลงใหลในการสร้างเว็บไซต์ที่สวยงามและใช้งานง่าย ด้วยประสบการณ์ในการพัฒนาเว็บแอปพลิเคชันที่ทันสมัยและตอบสนองความต้องการของผู้ใช้งาน',
      education: {
        degree: 'ปริญญาตรี วิทยาการคอมพิวเตอร์',
        university: 'มหาวิทยาลัยธรรมศาสตร์',
        year: '2021 - 2025'
      }
    },
    en: {
      title: 'About Me',
      subtitle: 'Education',
      description: 'I am a Frontend Developer passionate about creating beautiful and user-friendly websites. With experience in developing modern web applications that meet user needs and provide excellent user experiences.',
      education: {
        degree: 'Bachelor of Computer Science',
        university: 'Thammasat University',
        year: '2021 - 2025'
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
