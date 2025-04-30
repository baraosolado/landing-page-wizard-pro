
import React from 'react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 gradient-bg opacity-90"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="w-full h-full hero-pattern"></div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 md:px-10 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Crie landing pages que vendem em minutos
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-3xl mx-auto">
            Junte-se aos milhares de empreendedores que já estão usando o MicroLanding 
            para criar landing pages otimizadas para conversão, sem conhecimento técnico.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button className="bg-white text-micro-purple hover:bg-gray-100 text-lg py-6 px-8">
              Comece Grátis
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/20 text-lg py-6 px-8">
              Ver Demo
            </Button>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-white/80">
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Sem cartão de crédito</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cancele quando quiser</span>
            </div>
            <div className="flex items-center">
              <svg className="h-5 w-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Suporte 24/7</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
