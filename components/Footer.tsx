
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { siteConfig } from '../data/config';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div>
             <a href="/" className="flex flex-col mb-4 group">
                <span className="font-serif text-2xl font-bold text-white leading-none">American Finance</span>
                <span className="font-sans text-xs font-bold text-primary tracking-[0.2em] uppercase">Corp</span>
             </a>
             <p className="text-gray-400 text-sm leading-relaxed mb-6">
               Empowering financial independence through comprehensive insurance solutions and agent development. We build legacies that last generations.
             </p>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-gray-700 pb-2 inline-block">Core Products</h3>
            <ul className="space-y-3">
              {siteConfig.products.map((product, index) => (
                <li key={index}>
                  <a href={product.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                    {product.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-gray-700 pb-2 inline-block">Company</h3>
            <ul className="space-y-3">
              {siteConfig.menuItems.map((item) => (
                <li key={item.path}>
                  <a href={item.path} className="text-gray-400 hover:text-primary transition-colors text-sm">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">Careers</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 border-b-2 border-gray-700 pb-2 inline-block">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <div className="flex flex-col">
                  <a href={`tel:${siteConfig.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-gray-300 hover:text-white transition-colors font-medium">
                    {siteConfig.contact.phone}
                  </a>
                  <span className="text-xs text-gray-500">{siteConfig.contact.hours}</span>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-300 hover:text-white transition-colors text-sm break-all">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">{siteConfig.contact.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
