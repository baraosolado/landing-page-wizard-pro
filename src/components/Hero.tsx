
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden hero-pattern">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-12 mb-10 lg:mb-0">
            <div className="animate-slide-up-fade">
              <span className="inline-block py-1 px-3 bg-micro-light-purple rounded-full text-micro-dark-purple font-medium text-sm mb-4">
                Lançamento Especial - 7 dias grátis
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Crie <span className="gradient-text">landing pages</span> que vendem em apenas minutos
              </h1>
              <p className="text-gray-600 text-lg md:text-xl mb-8">
                O MicroLanding permite que você crie landing pages de alta conversão para vender produtos ou serviços, sem conhecimento técnico e sem complicação.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="gradient-bg hover:opacity-90 transition-opacity text-lg py-6 px-8">
                  Comece Grátis
                </Button>
                <Button variant="outline" className="border-micro-purple text-micro-purple hover:bg-micro-light-purple text-lg py-6 px-8">
                  Ver Demo
                </Button>
              </div>
              <div className="mt-8 flex items-center text-sm text-gray-500">
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Sem cartão de crédito</span>
                <span className="mx-2">•</span>
                <svg className="h-4 w-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Cancele quando quiser</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 animation-delay-200 animate-float">
              <div className="bg-white p-2 rounded-lg shadow-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="MicroLanding Editor Preview" 
                  className="rounded-md w-full"
                />
                <div className="absolute -bottom-3 -right-3 bg-micro-purple text-white py-2 px-4 rounded-lg text-sm font-medium -rotate-3">
                  Pronto em 5 minutos!
                </div>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-micro-light-purple rounded-full filter blur-3xl opacity-50"></div>
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-micro-soft-yellow rounded-full filter blur-3xl opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
