
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { siteConfig } from '../data/config';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold text-gray-900 leading-none group-hover:text-primary transition-colors">American Finance</span>
              <span className="font-sans text-xs font-bold text-primary tracking-[0.2em] uppercase">Corp</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {siteConfig.menuItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`text-sm font-bold uppercase tracking-wide hover:text-primary transition-colors ${isActive(item.path) ? 'text-primary' : 'text-gray-600'}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {siteConfig.menuItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`block px-3 py-4 rounded-md text-base font-bold ${isActive(item.path) ? 'text-primary bg-blue-50' : 'text-gray-600 hover:text-primary hover:bg-gray-50'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
