
import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import PartnersSection from '../components/home/PartnersSection';
import SpecialistSection from '../components/home/SpecialistSection';
import ProductsSection from '../components/home/ProductsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <SpecialistSection />
      <ProductsSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;
