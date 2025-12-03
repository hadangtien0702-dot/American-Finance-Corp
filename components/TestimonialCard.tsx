
import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, role, image }) => {
  return (
    <div className="bg-white p-8 md:p-10 rounded-2xl shadow-xl border border-gray-100 h-full flex flex-col items-center text-center relative mx-4 mt-6 mb-6">
      {/* Quote Icon */}
      <div className="absolute -top-6 bg-primary text-white p-3 rounded-full shadow-lg">
        <Quote className="w-6 h-6 fill-current" />
      </div>

      <p className="text-gray-600 italic mb-8 text-lg md:text-xl leading-relaxed mt-4">
        "{quote}"
      </p>
      
      <div className="mt-auto flex flex-col items-center">
        {image && (
          <img 
            src={image} 
            alt={author} 
            className="w-16 h-16 rounded-full object-cover border-4 border-blue-50 mb-3 shadow-md"
          />
        )}
        <span className="font-bold text-gray-900 text-lg">{author}</span>
        <span className="text-sm text-primary font-bold uppercase tracking-wider">{role}</span>
      </div>
    </div>
  );
};

export default TestimonialCard;
