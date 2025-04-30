
import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Crie sua landing page <span className="gradient-text">em 3 passos simples</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Não precisa ser designer, programador ou especialista em marketing. 
            Nosso processo é tão simples que qualquer pessoa consegue criar uma página profissional em minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-micro-purple rounded-full text-white text-xl font-bold flex items-center justify-center shadow-md">
              1
            </div>
            <div className="bg-gray-50 rounded-xl p-8 pt-12 h-full border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Escolha um template</h3>
              <p className="text-gray-600 mb-6">
                Selecione um dos nossos templates otimizados para conversão de acordo com seu tipo de produto ou serviço.
              </p>
              <div className="h-48 bg-white rounded-md shadow-sm overflow-hidden p-2">
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-micro-purple rounded-full text-white text-xl font-bold flex items-center justify-center shadow-md">
              2
            </div>
            <div className="bg-gray-50 rounded-xl p-8 pt-12 h-full border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Personalize facilmente</h3>
              <p className="text-gray-600 mb-6">
                Use nosso editor visual para personalizar textos, cores, imagens e elementos da sua página sem complicação.
              </p>
              <div className="h-48 bg-white rounded-md shadow-sm overflow-hidden p-2">
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
                    <path d="M12 20H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.5 3.5C16.8978 3.10217 17.4374 2.87868 18 2.87868C18.2786 2.87868 18.5544 2.93355 18.8118 3.04016C19.0692 3.14676 19.303 3.30301 19.5 3.5C19.697 3.69698 19.8532 3.93083 19.9598 4.18821C20.0665 4.4456 20.1213 4.72143 20.1213 5C20.1213 5.27857 20.0665 5.5544 19.9598 5.81179C19.8532 6.06918 19.697 6.30302 19.5 6.5L7 19L3 20L4 16L16.5 3.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-micro-purple rounded-full text-white text-xl font-bold flex items-center justify-center shadow-md">
              3
            </div>
            <div className="bg-gray-50 rounded-xl p-8 pt-12 h-full border border-gray-100">
              <h3 className="text-xl font-semibold mb-4">Publique e venda</h3>
              <p className="text-gray-600 mb-6">
                Conecte seu método de pagamento e publique a página com apenas um clique. Comece a vender imediatamente!
              </p>
              <div className="h-48 bg-white rounded-md shadow-sm overflow-hidden p-2">
                <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-50">
                    <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18457 2.99721 7.13633 4.39828 5.49707C5.79935 3.85782 7.69279 2.71538 9.79619 2.24015C11.8996 1.76491 14.1003 1.98234 16.07 2.86" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M22 4L12 14.01L9 11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
