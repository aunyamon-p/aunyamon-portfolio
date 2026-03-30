import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProjectCarousel from "./ProjectCarousel";
import { Code2, FolderGit2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  tools: string[];
  githubLink?: string;
  images: string[];
  language: "th" | "en";
  mediaType?: "image" | "video";
  isWebLink?: boolean;
  darkMode?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tools,
  githubLink,
  images,
  language,
  mediaType = "image",
  isWebLink = false,
  darkMode = false,
}) => {
  const content = {
    th: {
      viewCode: "ดูโค้ด",
      viewWebsite: "ดูเว็บไซต์",
      tools: "เครื่องมือที่ใช้",
    },
    en: {
      viewCode: "View Code",
      viewWebsite: "View Website",
      tools: "Tools Used",
    },
  };

  const currentContent = content[language];

  const hasImages = images && images.length > 0;

  return (
    <Card className={`md:h-full overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all duration-300 hover:scale-[1.03] group flex flex-col border-0 ${
      darkMode 
        ? 'bg-white/10 hover:bg-white/15 shadow-lg shadow-black/20' 
        : 'bg-white/80 hover:shadow-xl'
    }`}>
      {hasImages && mediaType === "image" && (
        <ProjectCarousel images={images} title={title} />
      )}
      
      {hasImages && mediaType === "video" && (
        <div className="relative h-48 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={images[0]}
          />
        </div>
      )}

      {!hasImages && (
        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-tech-slate to-tech-slate-light flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-tech-cyan/20 flex items-center justify-center">
              <Code2 className="w-8 h-8 text-tech-cyan" />
            </div>
          </div>
        </div>
      )}

      <CardContent className="p-6 flex flex-col flex-1">
        <h3 className={`text-lg font-bold mb-3 group-hover:text-tech-cyan transition-colors ${
          darkMode ? 'text-white' : 'text-tech-slate'
        }`}>
          {title}
        </h3>

        <p className={`mb-4 text-sm leading-relaxed flex-1 ${
          darkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {description}
        </p>

        <div className="mb-4">
          <p className={`text-sm font-semibold mb-2 ${
            darkMode ? 'text-gray-400' : 'text-tech-slate'
          }`}>
            {currentContent.tools}:
          </p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span
                key={index}
                className={`px-3 py-1 text-xs rounded-full ${
                  darkMode 
                    ? 'bg-tech-cyan/15 text-tech-cyan border border-tech-cyan/30' 
                    : 'bg-tech-cyan/10 text-tech-cyan border border-tech-cyan/20'
                }`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {githubLink && (
          <Button
            asChild
            className="w-full bg-tech-cyan hover:bg-tech-cyan/90 text-tech-slate font-semibold mt-auto"
          >
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <FolderGit2 className="mr-2 w-4 h-4" />
              {isWebLink ? currentContent.viewWebsite : currentContent.viewCode}
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
