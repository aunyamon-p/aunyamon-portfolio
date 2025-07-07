
import React from 'react';

interface AboutSectionProps {
  language: 'th' | 'en';
}

const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  const content = {
    th: {
      title: 'เกี่ยวกับฉัน',
      description: "ฉันกำลังมุ่งเน้นในการพัฒนาทักษะ Front-end และต้องการเรียนรู้เทคโนโลยี Backend เพิ่มเติม ฉันกำลังมองหาตำแหน่งฝึกงานที่จะให้ประสบการณ์การทำงานจริง ทำโปรเจกต์จริง และเรียนรู้การทำงานเป็นทีม ฉันพร้อมเสมอที่จะเรียนรู้เครื่องมือใหม่ ๆ เทคโนโลยี และแนวปractices ที่ดีเพื่อเติบโตเป็น Developer",
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
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-slate mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-tech-cyan mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* About Me Content */}
          <div className="animate-fade-in">
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {currentContent.description}
            </p>
          </div>

          {/* Education Card */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="glass rounded-2xl p-8 bg-gradient-to-br from-tech-slate to-tech-slate-light text-white">
              <h3 className="text-2xl font-bold text-tech-cyan mb-6">
                {currentContent.education.title}
              </h3>
              
              <div className="space-y-3">
                <p className="text-tech-cyan font-semibold">
                  {currentContent.education.period}
                </p>
                <h4 className="text-xl font-semibold">
                  {currentContent.education.university}
                </h4>
                <p className="text-gray-300">
                  {currentContent.education.faculty}
                </p>
                <p className="text-gray-300">
                  {currentContent.education.major}
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
