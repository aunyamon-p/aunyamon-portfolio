
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  githubLink: string;
  images: string[];
  language: 'th' | 'en';
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tools,
  githubLink,
  images,
  language
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const content = {
    th: {
      viewCode: 'ดูโค้ด',
      tools: 'เครื่องมือที่ใช้'
    },
    en: {
      viewCode: 'View Code',
      tools: 'Tools Used'
    }
  };

  const currentContent = content[language];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Card className="overflow-hidden bg-white/80 backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-105 group">
      <div className="relative h-48 overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={`https://images.unsplash.com/${image}?w=400&h=200&fit=crop`}
            alt={`${title} screenshot ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-tech-slate mb-3 group-hover:text-tech-cyan transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {description}
        </p>

        <div className="mb-4">
          <p className="text-sm font-semibold text-tech-slate mb-2">
            {currentContent.tools}:
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-tech-cyan/10 text-tech-cyan text-xs rounded-full border border-tech-cyan/20"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        <Button
          asChild
          className="w-full bg-tech-cyan hover:bg-tech-cyan/90 text-tech-slate font-semibold"
        >
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            {currentContent.viewCode}
            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.57v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
