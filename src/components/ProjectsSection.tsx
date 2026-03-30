
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
      title: 'Smart Leave Management System',
      description: language === 'th' 
        ? 'สร้างระบบ workflow อัตโนมัติสำหรับคำขอลาและการแจ้งเตือนการอนุมัติ'
        : 'Built an automated workflow for leave requests and approval notifications.',
      tools: ['Backend Automation', 'Integration'],
      githubLink: undefined,
      images: [],
      mediaType: 'image' as const
    },
    {
      title: 'Lost & Found Management System',
      description: language === 'th'
        ? 'ออกแบบ Backend logic สำหรับระบบรายงานและติดตามสิ่งของหาย รวมถึงขั้นตอนการเคลมสิ่งของ'
        : 'Designed backend logic for item reporting and claim workflows.',
      tools: ['Java', 'Spring Boot', 'MySQL'],
      githubLink: undefined,
      images: [],
      mediaType: 'image' as const
    },
    {
      title: 'TodoList System',
      description: language === 'th'
        ? 'สร้างระบบจัดการงานแบบ Kanban Board สำหรับติดตามงาน'
        : 'Built a Kanban-based workflow for task tracking.',
      tools: ['React', 'Node.js', 'MongoDB'],
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
    },
    {
      title: 'Library Management System',
      description: language === 'th'
        ? 'ออกแบบระบบฐานข้อมูลที่มีประสิทธิภาพสำหรับจัดการสต็อกหนังสือและข้อมูลผู้ใช้'
        : 'Designed efficient data operations to manage book inventory and user records.',
      tools: ['API', 'SQL Server', 'Database Design'],
      githubLink: undefined,
      images: [],
      mediaType: 'image' as const
    }
  ];

  const currentContent = content[language];

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-tech-slate to-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-4 h-4 bg-tech-cyan/20 rounded-full animate-float"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-tech-cyan/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-tech-cyan/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-tech-cyan/25 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-7 h-7 bg-tech-cyan/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-tech-cyan/30 rounded-full animate-float" style={{ animationDelay: '5s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {currentContent.title}
          </h2>
          <div className="w-24 h-1 bg-tech-cyan mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
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
                darkMode
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
