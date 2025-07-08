
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
        : 'A website for internal email management, designed based on professor-defined User Stories. Main features include registration, login, compose and send emails, view inbox, reply, delete emails, and update email status.',
      tools: ['C#', 'HTML', 'CSS', 'Js', 'Azure'],
      githubLink: 'https://github.com/aunyamon-p/MeowCompany.git',
      images: [
        '/lovable-uploads/e676d266-4394-48a8-af54-55c3a5b18edc.png',
        '/lovable-uploads/0cade10b-3b62-4cdb-a52f-83c4458a8a9b.png',
        '/lovable-uploads/87b30711-878d-4835-bb52-b17dcabfdd88.png',
        '/lovable-uploads/88a23a80-3c95-429b-a30a-675a94651d92.png',
        '/lovable-uploads/cd6ab665-124d-4b1e-b360-699deed5dc59.png'
      ],
      mediaType: 'image' as const
    },
    {
      title: 'SHROOM SHOP',
      description: language === 'th'
        ? 'เว็บไซต์ขายไอเท็มจากในเกม โดยไอเท็มที่ขายคือ "เห็ด" ซึ่งได้จากเกมใน Roblox ที่ชื่อว่า "Creatures of Sonaria" มีฟังก์ชันหลัก ได้แก่ เข้าสู่ระบบ/สมัครสมาชิก เพิ่ม/ลบรายการสินค้า ตระกร้าสินค้า เติมเงิน ชำระเงิน และประวัติการซื้อขาย'
        : 'A website for selling in-game items, specifically "mushrooms" from the Roblox game "Creatures of Sonaria". Main features include login/registration, add/remove products, shopping cart, top-up money, payment, and transaction history.',
      tools: ['HTML', 'CSS', 'Js', 'React.js', 'Node.js'],
      githubLink: 'https://github.com/aunyamon-p/Shroom_shop.git',
      images: ['/lovable-uploads/shroom.mp4'],
      mediaType: 'video' as const
    },
    {
      title: 'Company Website',
      description: language === 'th'
        ? 'เว็บไซต์แสดงข้อมูลทั่วไปของบริษัท'
        : 'A website displaying general company information.',
      tools: ['HTML', 'Js', 'Tailwind CSS'],
      githubLink: 'https://github.com/aunyamon-p/CompanyWeb.git',
      images: ['/lovable-uploads/company.mp4'],
      mediaType: 'video' as const
    },
    {
      title: 'Pet Care Platform (Chatbot)',
      description: language === 'th'
        ? 'แพลตฟอร์มดูแลสุขภาพสัตว์เลี้ยงแบบครบวงจรผ่านเว็บไซต์และแชทบอท สามารถค้นหาคลินิก สัตวแพทย์ และรับคำแนะนำเบื้องต้นเกี่ยวกับสุขภาพสัตว์ได้'
        : 'A pet health care platform with website and chatbot for finding clinics, veterinarians, and receiving basic pet health advice.',
      tools: ['Bolt.new', 'React', 'Tailwind CSS', 'Supabase'],
      githubLink: 'https://petbuddycare.org/',
      images: [
        '/lovable-uploads/71a0bb08-16a7-4d16-a1db-0a364748dae9.png',
        '/lovable-uploads/bf476bcd-0c05-479d-acb8-76e1091d5bec.png'
      ],
      mediaType: 'image' as const,
      isWebLink: true
    },
    {
      title: 'TodoList Website (UI)',
      description: language === 'th'
        ? 'เว็บไซต์จัดการลําดับรายการสิ่งที่ต้องทํา ประกอบด้วย SignIn , SignUp , Add Task , Edit Task , Delete Task , Kandan Board (Darg & Drop Tasks ได้)'
        : 'A task management website for organizing to-do lists, including SignIn, SignUp, Add Task, Edit Task, Delete Task, Kanban Board (Drag & Drop Tasks).',
      tools: ['HTML', 'Tailwind CSS', 'Angular'],
      githubLink: 'https://github.com/aunyamon-p/ToDoList.git',
      images: [
        '/lovable-uploads/f3963761-4414-4fd5-b7cf-e537125f86a7.png',
        '/lovable-uploads/b669765e-c469-48ce-93db-15da528b65c4.png',
        '/lovable-uploads/1194cd00-5bb0-497b-b26e-4cfecee3ac78.png',
        '/lovable-uploads/1221d42b-d4ac-4c9e-97f6-2b9b660a2c80.png',
        '/lovable-uploads/b07c058c-cd7a-4400-8ef6-e7d73ef02939.png',
        '/lovable-uploads/e0c86601-ecf5-4a42-8719-484bd1e88a64.png'
      ],
      mediaType: 'image' as const
    }
  ];

  const currentContent = content[language];

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-tech-cyan/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-tech-cyan/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-tech-cyan/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-tech-cyan/25 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-7 h-7 bg-tech-cyan/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
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
                isWebLink={project.isWebLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
