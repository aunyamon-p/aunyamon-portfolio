
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
      githubLink: 'https://github.com/aunyamon-p/MeowCompany.git',
      images: ['photo-1461749280684-dccba630e2f6', 'photo-1486312338219-ce68d2c6f44d', 'photo-1487058792275-0ad4aaf24ca7', 'photo-1581091226825-a6a2a5aee158', 'photo-1531297484001-80022131f5a1'],
      mediaType: 'image' as const
    },
    {
      title: 'SHROOM SHOP',
      description: language === 'th'
        ? 'เว็บไซต์ขายไอเท็มจากในเกม โดยไอเท็มที่ขายคือ "เห็ด" ซึ่งได้จากเกมใน Roblox ที่ชื่อว่า "Creatures of Sonaria" มีฟังก์ชันหลัก ได้แก่ เข้าสู่ระบบ/สมัครสมาชิก เพิ่ม/ลบรายการสินค้า ตระกร้าสินค้า เติมเงิน ชำระเงิน และประวัติการซื้อขาย'
        : 'A website for selling in-game items, specifically "mushrooms" from the Roblox game "Creatures of Sonaria". Main features include login/registration, add/remove products, shopping cart, top-up money, payment, and transaction history.',
      tools: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Node.js'],
      githubLink: 'https://github.com/aunyamon-p/Shroom_shop.git',
      images: ['photo-1488590528505-98d2b5aba04b'],
      mediaType: 'video' as const
    },
    {
      title: 'Company Website',
      description: language === 'th'
        ? 'เว็บไซต์แสดงข้อมูลทั่วไปของบริษัท'
        : 'A website displaying general company information.',
      tools: ['HTML', 'JavaScript', 'Tailwind CSS'],
      githubLink: 'https://github.com/aunyamon-p/CompanyWeb.git',
      images: ['photo-1649972904349-6e44c42644a7'],
      mediaType: 'video' as const
    },
    {
      title: 'Pet Care Platform (Chatbot)',
      description: language === 'th'
        ? 'แพลตฟอร์มดูแลสุขภาพสัตว์เลี้ยงแบบครบวงจรผ่านเว็บไซต์และแชทบอท สามารถค้นหาคลินิก สัตวแพทย์ และรับคำแนะนำเบื้องต้นเกี่ยวกับสุขภาพสัตว์ได้'
        : 'A comprehensive pet health care platform through website and chatbot. Can search for clinics, veterinarians, and receive basic health advice for pets.',
      tools: ['Bolt.new', 'React', 'Tailwind CSS', 'Supabase'],
      githubLink: 'https://github.com',
      images: ['photo-1518770660439-4636190af475'],
      mediaType: 'image' as const
    },
    {
      title: 'Todolist Website',
      description: language === 'th'
        ? 'เว็บไซต์จัดการรายการสิ่งที่ต้องทำ ช่วยจัดลำดับงาน และติดตามสถานะได้สะดวก'
        : 'A task management website that helps organize work priorities and track status conveniently.',
      tools: ['HTML', 'Tailwind CSS', 'Angular'],
      githubLink: 'https://github.com',
      images: ['photo-1470071459604-3b5ec3a7fe05', 'photo-1482938289607-e9573fc25abb', 'photo-1501854140801-50d01698950b'],
      mediaType: 'image' as const
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
                mediaType={project.mediaType}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
