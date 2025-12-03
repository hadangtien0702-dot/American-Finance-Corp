
import React from 'react';

const PartnersSection: React.FC = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-8 text-center">Trusted by Industry Leaders</p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
           {/* National Life Group */}
           <div className="text-xl md:text-2xl font-serif font-bold text-gray-800 cursor-default text-center">
             National Life Group
           </div>
           {/* AIG */}
           <div className="text-2xl md:text-3xl font-sans font-black text-blue-900 cursor-default tracking-tighter">
             AIG
           </div>
           {/* Allianz */}
           <div className="text-xl md:text-2xl font-sans font-bold text-blue-800 cursor-default tracking-wide uppercase">
             Allianz
           </div>
           {/* Transamerica */}
           <div className="text-lg md:text-xl font-serif font-bold italic text-gray-700 cursor-default">
             Transamerica
           </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
