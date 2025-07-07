
import React, { useState, useEffect } from 'react';

interface ProjectCarouselProps {
  images: string[];
  title: string;
  autoSlideInterval?: number;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ 
  images, 
  title, 
  autoSlideInterval = 2000 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [images.length, autoSlideInterval]);

  return (
    <div className="relative h-48 overflow-hidden rounded-t-lg">
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
      
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-tech-cyan' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
  );
};

export default ProjectCarousel;
