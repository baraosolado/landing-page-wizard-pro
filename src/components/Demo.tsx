
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Demo = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('infoproduto');
  
  return (
    <section id="demo" className="py-20 bg-micro-soft-gray">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experimente o <span className="gradient-text">MicroLanding</span> agora
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Veja como é fácil criar uma landing page profissional com nossos templates 
            otimizados para diferentes tipos de produtos e serviços.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
          <div className="p-6 border-b border-gray-200">
            <Tabs defaultValue="infoproduto" onValueChange={setSelectedTemplate}>
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="infoproduto">Infoproduto</TabsTrigger>
                <TabsTrigger value="servico">Serviço</TabsTrigger>
                <TabsTrigger value="fisico">Produto Físico</TabsTrigger>
              </TabsList>
              
              <TabsContent value="infoproduto" className="mt-6">
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <h3 className="font-semibold text-lg mb-2">Template para Infoprodutos</h3>
                  <p className="text-gray-600">
                    Ideal para cursos online, e-books, mentorias e produtos digitais. Este template contém 
                    elementos específicos para destacar o conhecimento e resultados do seu infoproduto.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="servico" className="mt-6">
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <h3 className="font-semibold text-lg mb-2">Template para Serviços</h3>
                  <p className="text-gray-600">
                    Perfeito para consultores, freelancers e prestadores de serviços. Este template enfatiza 
                    credibilidade, processo de trabalho e resultados para seus clientes.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="fisico" className="mt-6">
                <div className="bg-gray-50 p-4 rounded-md mb-6">
                  <h3 className="font-semibold text-lg mb-2">Template para Produtos Físicos</h3>
                  <p className="text-gray-600">
                    Desenvolvido para e-commerces e vendas de produtos físicos. Este template destaca 
                    características do produto, benefícios e informações de envio.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="p-6">
            <div className="relative rounded-md overflow-hidden border border-gray-200 bg-white">
              <div className="w-full h-12 bg-gray-100 flex items-center px-4 space-x-2 border-b border-gray-200">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <div className="flex-1 bg-white h-6 rounded-full px-3 text-xs flex items-center text-gray-500">
                  www.microlanding.com.br/sua-pagina
                </div>
              </div>
              <div className="h-96 overflow-hidden relative">
                {selectedTemplate === 'infoproduto' && (
                  <div className="p-4">
                    <div className="h-64 bg-micro-light-purple rounded-md flex items-center justify-center mb-4">
                      <div className="text-center">
                        <h3 className="font-bold text-xl mb-2">Curso Completo de Marketing Digital</h3>
                        <p className="text-gray-600">Do zero ao avançado em 8 semanas</p>
                        <Button className="mt-4 gradient-bg">Garantir Minha Vaga</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-gray-100 h-20 rounded"></div>
                      <div className="bg-gray-100 h-20 rounded"></div>
                      <div className="bg-gray-100 h-20 rounded"></div>
                    </div>
                  </div>
                )}
                
                {selectedTemplate === 'servico' && (
                  <div className="p-4">
                    <div className="h-64 bg-micro-soft-blue rounded-md flex items-center justify-center mb-4">
                      <div className="text-center">
                        <h3 className="font-bold text-xl mb-2">Consultoria Empresarial Especializada</h3>
                        <p className="text-gray-600">Transforme os resultados da sua empresa</p>
                        <Button className="mt-4 gradient-bg">Agendar Diagnóstico Gratuito</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      <div className="bg-gray-100 h-20 rounded"></div>
                      <div className="bg-gray-100 h-20 rounded"></div>
                      <div className="bg-gray-100 h-20 rounded"></div>
                      <div className="bg-gray-100 h-20 rounded"></div>
                    </div>
                  </div>
                )}
                
                {selectedTemplate === 'fisico' && (
                  <div className="p-4">
                    <div className="h-64 bg-micro-soft-green rounded-md flex items-center justify-center mb-4">
                      <div className="text-center">
                        <h3 className="font-bold text-xl mb-2">Smartwatch X9 Premium</h3>
                        <p className="text-gray-600">O melhor custo-benefício do mercado</p>
                        <Button className="mt-4 gradient-bg">Comprar Agora</Button>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-100 h-20 rounded"></div>
                      <div className="bg-gray-100 h-20 rounded"></div>
                    </div>
                  </div>
                )}

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"></div>
              </div>
              <div className="p-4 text-center">
                <Button className="gradient-bg w-full md:w-auto">Criar Minha Landing Page</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
