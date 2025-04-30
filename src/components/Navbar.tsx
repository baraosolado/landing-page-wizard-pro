
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="py-4 px-6 md:px-10 w-full border-b border-gray-100 bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold gradient-text">MicroLanding</span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-600 hover:text-micro-purple transition-colors">Recursos</a>
          <a href="#demo" className="text-gray-600 hover:text-micro-purple transition-colors">Demo</a>
          <a href="#pricing" className="text-gray-600 hover:text-micro-purple transition-colors">Preços</a>
          <a href="#faq" className="text-gray-600 hover:text-micro-purple transition-colors">FAQ</a>
          <Button className="gradient-bg hover:opacity-90 transition-opacity">Teste Grátis</Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 text-gray-600"
          >
            {!isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "fixed left-0 right-0 min-h-screen bg-white px-6 transition-transform duration-300 ease-in-out md:hidden",
        isMenuOpen ? "transform translate-y-0" : "transform -translate-y-full"
      )}>
        <div className="pt-24 pb-8 flex flex-col space-y-6">
          <a 
            href="#features" 
            className="text-lg text-gray-600 hover:text-micro-purple transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Recursos
          </a>
          <a 
            href="#demo" 
            className="text-lg text-gray-600 hover:text-micro-purple transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Demo
          </a>
          <a 
            href="#pricing" 
            className="text-lg text-gray-600 hover:text-micro-purple transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Preços
          </a>
          <a 
            href="#faq" 
            className="text-lg text-gray-600 hover:text-micro-purple transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <Button 
            className="w-full gradient-bg hover:opacity-90 transition-opacity"
            onClick={() => setIsMenuOpen(false)}
          >
            Teste Grátis
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
