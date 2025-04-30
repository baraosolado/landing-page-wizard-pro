
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  
  const plans = [
    {
      name: "Grátis",
      description: "Para quem quer experimentar a plataforma",
      price: {
        monthly: "R$0",
        annually: "R$0"
      },
      features: [
        "1 landing page ativa",
        "Templates básicos",
        "Subdomínio gratuito",
        "Estatísticas básicas",
        "Marca d'água do MicroLanding",
      ],
      buttonText: "Começar Grátis",
      buttonVariant: "outline",
      popular: false,
    },
    {
      name: "Premium",
      description: "Para empreendedores individuais",
      price: {
        monthly: "R$19,90",
        annually: "R$199,90"
      },
      features: [
        "Páginas ilimitadas",
        "Todos os templates",
        "Domínio personalizado",
        "Sem marca d'água",
        "Integrações completas",
        "Estatísticas avançadas",
        "Suporte prioritário",
      ],
      buttonText: "Assinar Premium",
      buttonVariant: "default",
      popular: true,
    },
    {
      name: "Agências",
      description: "Para agências e múltiplos clientes",
      price: {
        monthly: "R$49,90",
        annually: "R$499,90"
      },
      features: [
        "Todos os recursos Premium",
        "Até 10 contas de clientes",
        "Marca branca",
        "Dashboard unificado",
        "API de integração",
        "Exportação de dados",
        "Gerenciamento de equipe",
      ],
      buttonText: "Assinar Plano Agências",
      buttonVariant: "outline",
      popular: false,
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planos <span className="gradient-text">acessíveis</span> para todos
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto mb-10">
            Escolha o plano ideal para suas necessidades. Cancele quando quiser, sem compromissos.
          </p>
          
          <div className="flex items-center justify-center mb-8">
            <span className={`mr-3 ${!isAnnual ? 'font-semibold text-micro-purple' : 'text-gray-500'}`}>
              Mensal
            </span>
            <button 
              className={`w-14 h-8 rounded-full p-1 ${isAnnual ? 'bg-micro-purple' : 'bg-gray-300'}`}
              onClick={() => setIsAnnual(!isAnnual)}
              aria-label={isAnnual ? "Trocar para plano mensal" : "Trocar para plano anual"}
            >
              <div 
                className={`w-6 h-6 bg-white rounded-full shadow-sm transform transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`} 
              />
            </button>
            <div className="ml-3 relative">
              <span className={`${isAnnual ? 'font-semibold text-micro-purple' : 'text-gray-500'}`}>
                Anual
              </span>
              <div className="absolute -top-4 -right-10 bg-micro-soft-orange text-micro-dark-purple text-xs font-medium py-1 px-2 rounded transform rotate-3">
                2 meses grátis
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={cn(
                "rounded-xl bg-white border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl relative",
                plan.popular && "border-micro-purple shadow-lg scale-105 md:scale-110"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-micro-purple text-white py-1 px-4 text-sm font-semibold">
                  Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{isAnnual ? plan.price.annually : plan.price.monthly}</span>
                  {plan.name !== "Grátis" && (
                    <span className="text-gray-500 ml-1">
                      {isAnnual ? "/ano" : "/mês"}
                    </span>
                  )}
                </div>
                <Button 
                  className={cn(
                    "w-full py-6",
                    plan.buttonVariant === "default" ? "gradient-bg hover:opacity-90" : "border-micro-purple text-micro-purple hover:bg-micro-light-purple"
                  )}
                >
                  {plan.buttonText}
                </Button>
              </div>
              
              <div className="border-t border-gray-200 p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-micro-purple mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
