
import React, { useState } from 'react';
import { ArrowRight, ExternalLink, ImageOff } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ title, description, imageUrl, link }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="group block bg-white rounded-2xl overflow-hidden h-full relative transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:shadow-blue-500/20"
    >
      {/* Gradient Bottom Border */}
      <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-400 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-20"></div>

      {/* Image Container */}
      <div className="bg-gray-50 h-64 p-8 flex items-center justify-center relative overflow-hidden">
        {/* Glow Effect behind image */}
        <div className="absolute w-32 h-32 bg-blue-400/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {!imgError ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="relative z-10 max-h-full w-auto object-contain shadow-md rounded-md transform transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-gray-400 relative z-10">
            <ImageOff className="w-12 h-12 mb-2 opacity-50" />
            <span className="text-xs uppercase font-bold tracking-wider">Image Not Found</span>
            <span className="text-[10px] text-center px-4 mt-1">Check Google Drive Permissions</span>
          </div>
        )}
        
        {/* External Link Icon */}
        <div className="absolute top-4 right-4 text-gray-400 group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100">
          <ExternalLink className="w-5 h-5" />
        </div>
      </div>

      {/* Content */}
      <div className="p-7 flex flex-col h-[calc(100%-16rem)]">
        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow border-b border-gray-100 pb-4">
          {description}
        </p>
        
        {/* Call to Action */}
        <div className="flex items-center text-primary font-bold text-sm tracking-wide group/btn">
          <span>Learn More</span>
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
