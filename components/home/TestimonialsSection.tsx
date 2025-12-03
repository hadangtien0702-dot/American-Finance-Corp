
import React, { useState, useEffect } from 'react';
import TestimonialCard from '../TestimonialCard';
import { siteConfig } from '../../data/config';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto slide effect
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % siteConfig.testimonials.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % siteConfig.testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + siteConfig.testimonials.length) % siteConfig.testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from the families we've protected and the agents whose careers we've transformed.
            </p>
         </div>

         {/* Carousel Container */}
         <div 
            className="relative max-w-4xl mx-auto"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
         >
            {/* Main Slider Area */}
            <div className="overflow-hidden px-4 py-8 -mx-4 -my-8">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {siteConfig.testimonials.map((t, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-2">
                    <TestimonialCard 
                      quote={t.quote}
                      author={t.author}
                      role={t.role}
                      image={t.image}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <button 
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-3 rounded-full shadow-lg text-gray-400 hover:text-primary transition-colors hidden md:block"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-3 rounded-full shadow-lg text-gray-400 hover:text-primary transition-colors hidden md:block"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="flex justify-center space-x-3 mt-8">
              {siteConfig.testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentIndex === index ? 'bg-primary w-8' : 'bg-gray-300 hover:bg-primary'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
         </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
