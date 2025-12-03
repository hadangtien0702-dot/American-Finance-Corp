
import React, { useState } from 'react';
import { siteConfig } from '../../data/config';
import { ArrowRight, CheckCircle2, ExternalLink, ImageOff } from 'lucide-react';

interface ProductRowProps {
  product: typeof siteConfig.products[0];
  index: number;
}

const ProductRow: React.FC<ProductRowProps> = ({ product, index }) => {
  const [imgError, setImgError] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>
      {/* Visual Side */}
      <div className="w-full lg:w-1/2 relative group">
        {/* Spotlight Glow */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/20 rounded-full blur-[80px] transition-all duration-700 group-hover:bg-blue-500/30 ${!isEven ? 'bg-cyan-600/20' : ''}`}></div>
        
        {/* Image Container */}
        <div className="relative z-10 transform transition-transform duration-700 hover:scale-105 hover:-translate-y-2 perspective-1000">
           <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-blue-900/50 border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm p-8 md:p-12 flex items-center justify-center min-h-[300px]">
              {/* Inner subtle glow for the object itself */}
              <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {product ? (
                <img 
                  src={product.imageUrl}
                  alt={product.title} 
                  className="w-auto h-auto max-h-96 max-w-full object-contain drop-shadow-2xl relative z-10"
                  onError={() => setImgError(true)}
                />
              ) : (
                <div className="flex flex-col items-center justify-center text-slate-500 py-12">
                  <ImageOff className="w-16 h-16 mb-4 opacity-50" />
                  <span className="text-sm font-bold uppercase tracking-wider">Image Not Available</span>
                  <span className="text-xs text-center px-4 mt-2 max-w-xs">If using Google Drive, ensure "Anyone with the link" is selected.</span>
                </div>
              )}
           </div>
           
           {/* Decorative Elements */}
           <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>

      {/* Content Side */}
      <div className="w-full lg:w-1/2">
         <div className="flex items-center gap-3 mb-4">
            <span className="h-px w-12 bg-blue-500/50"></span>
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm">Featured Product 0{index + 1}</span>
         </div>
         
         <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
           {product.title}
         </h3>
         
         <p className="text-lg text-slate-300 mb-8 leading-relaxed">
           {product.description}
         </p>
         
         {/* Features List (Mock data for visual appeal) */}
         <ul className="space-y-3 mb-10">
            <li className="flex items-start gap-3 text-slate-400">
              <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>Maximize cash value accumulation</span>
            </li>
            <li className="flex items-start gap-3 text-slate-400">
              <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>Tax-advantaged growth potential</span>
            </li>
            <li className="flex items-start gap-3 text-slate-400">
              <CheckCircle2 className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <span>Flexible premium structures</span>
            </li>
         </ul>

         <a 
           href={product.link} 
           target="_blank" 
           rel="noopener noreferrer" 
           className="group inline-flex items-center gap-3 bg-white text-[#020617] font-bold py-4 px-8 rounded-full hover:bg-blue-50 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
         >
           Learn More
           <ExternalLink className="w-5 h-5 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
         </a>
      </div>
    </div>
  );
};

const ProductsSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-[#020617] text-white relative overflow-hidden">
      {/* Global Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 md:mb-32">
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
            Exclusive Financial Solutions
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">
            Our Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Portfolio</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Explore our specialized strategies designed to maximize wealth, protect assets, and secure your family's legacy.
          </p>
        </div>

        {/* Products List - Zig Zag Layout */}
        <div className="flex flex-col gap-24 md:gap-32">
          {siteConfig.products.map((product, index) => (
            <ProductRow key={index} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center border-t border-slate-800 pt-16">
             <p className="text-slate-400 mb-6">Looking for a custom solution?</p>
             <a 
               href="https://thinksmartinsurance.com" 
               target="_blank" 
               rel="noopener noreferrer" 
               className="inline-flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-lg transition-colors"
             >
                View Full Product Catalog
                <ArrowRight className="w-5 h-5" />
             </a>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
