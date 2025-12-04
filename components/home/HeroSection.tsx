
import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] flex items-center bg-gray-900 text-white overflow-hidden">
      {/* Background Image with Darker Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Corporate Background" 
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Strong gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-900/40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
             <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
             Now Recruiting Agents Nationwide
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-[1.1]">
            Build Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Legacy</span>. <br/>
            Secure Their <span className="text-white">Future</span>.
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed">
            American Finance Corp empowers families with superior financial protection and provides agents with the tools to build independent business empires.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white bg-primary hover:bg-blue-600 transition-all shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-1">
              Start Your Career
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold rounded-full text-white border border-slate-600 hover:bg-slate-800 transition-all hover:border-slate-500">
              Explore Our Services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-slate-400 font-medium">
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Top-Tier Commission</span>
             </div>
             <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>Vested Renewals</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
