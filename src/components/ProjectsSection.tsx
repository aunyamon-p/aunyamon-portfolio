
import React from 'react';
import ProjectCard from './ProjectCard';

interface ProjectsSectionProps {
  language: 'th' | 'en';
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ language }) => {
  const content = {
    th: {
      title: 'ผลงานของฉัน'
    },
    en: {
      title: 'My Projects'
    }
  };

  const projects = [
    {
      title: 'MEOW COMPANY WEBSITE',
      description: language === 'th' 
        ? 'เว็บไซต์ที่ออกแบบตาม User Story ที่อาจารย์กำหนดให้ เป็นระบบเฉพาะไว้สำหรับใช้งานในองค์กร เพื่อให้คนในองค์กรมีความสะดวกรวดเร็วในการจัดการอีเมล ทั้งการอ่าน และตอบกลับอีเมล ฟังก์ชันที่มี ได้แก่ สมัครสมาชิก เข้าสู่ระบบ เขียนอีเมล ส่งอีเมล ดูอีเมล ลบอีเมล อัปเดตสถานะอีเมล'
        : 'A website designed according to professor-defined User Stories, specifically built for organizational use to provide convenient and fast email management for organization members, including reading and replying to emails. Features include registration, login, compose email, send email, view email, delete email, and update email status.',
      tools: ['C#', 'HTML', 'CSS', 'JavaScript', 'Azure'],
      githubLink: 'https://github.com',
      images: ['photo-1461749280684-dccba630e2f6', 'photo-1486312338219-ce68d2c6f44d']
    },
    {
      title: 'E-COMMERCE PLATFORM',
      description: language === 'th'
        ? 'แพลตฟอร์มการค้าออนไลน์ที่ครบครันด้วยระบบการจัดการสินค้า ระบบชำระเงิน และระบบจัดการคำสั่งซื้อ'
        : 'Complete e-commerce platform with product management system, payment processing, and order management system.',
      tools: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      githubLink: 'https://github.com',
      images: ['photo-1487058792275-0ad4aaf24ca7', 'photo-1581091226825-a6a2a5aee158']
    },
    {
      title: 'WEATHER DASHBOARD',
      description: language === 'th'
        ? 'แดชบอร์ดสภาพอากาศที่แสดงข้อมูลสภาพอากาศแบบเรียลไทม์ พร้อมกับการพยากรณ์อากาศ'
        : 'Weather dashboard displaying real-time weather information with forecasting capabilities.',
      tools: ['Vue.js', 'Weather API', 'Chart.js'],
      githubLink: 'https://github.com',
      images: ['photo-1488590528505-98d2b5aba04b', 'photo-1649972904349-6e44c42644a7']
    },
    {
      title: 'TASK MANAGEMENT APP',
      description: language === 'th'
        ? 'แอปพลิเคชันจัดการงานที่ช่วยในการติดตามและจัดการงานประจำวัน'
        : 'Task management application for tracking and organizing daily tasks and projects.',
      tools: ['React Native', 'Firebase', 'Redux'],
      githubLink: 'https://github.com',
      images: ['photo-1470071459604-3b5ec3a7fe05', 'photo-1482938289607-e9573fc25ebb']
    },
    {
      title: 'PORTFOLIO WEBSITE',
      description: language === 'th'
        ? 'เว็บไซต์แสดงผลงานส่วนตัวที่ออกแบบด้วยเทคโนโลยีทันสมัย'
        : 'Personal portfolio website designed with modern technologies and responsive design.',
      tools: ['React', 'Tailwind CSS', 'TypeScript'],
      githubLink: 'https://github.com',
      images: ['photo-1501854140801-50d01698950b', 'photo-1527576539890-dfa815648363']
    }
  ];

  const currentContent = content[language];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tech-slate mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-tech-cyan mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tools={project.tools}
                githubLink={project.githubLink}
                images={project.images}
                language={language}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
