
import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const SpecialistSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full z-0 opacity-50"></div>
             <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
             <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional Specialist" 
              className="relative z-10 w-full rounded-2xl shadow-2xl"
              loading="lazy"
            />
            {/* Float Card */}
            <div className="absolute bottom-8 left-8 bg-white p-4 rounded-lg shadow-lg z-20 hidden md:block max-w-xs border-l-4 border-primary">
                <p className="text-gray-800 font-bold text-sm">"We manage risk so you don't have to."</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2">
            <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-xs mb-4">
                <ShieldCheck className="w-4 h-4" />
                <span>Specialized Expertise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Specialists in Property, Casualty, & Financial Growth
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Our Specialty Insurance Group offers specialized commercial products that help businesses manage financial risk. We go beyond basic coverage to provide strategies that meet your specific and ever-changing financial risk exposures.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Whether you are a business owner looking to protect your assets or an individual seeking tax-advantaged retirement growth, our specialists design custom solutions tailored to your unique situation.
            </p>
            
            <Link to="/about" className="group inline-flex items-center text-primary font-bold text-lg hover:text-blue-700 transition-colors">
              Learn more about our approach
              <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpecialistSection;
