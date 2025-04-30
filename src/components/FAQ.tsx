
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Preciso ter conhecimento técnico para usar o MicroLanding?",
      answer: "Não! O MicroLanding foi desenvolvido especialmente para pessoas sem conhecimento técnico. Nossa interface é intuitiva e não exige nenhum conhecimento em programação ou design. Você consegue criar uma landing page profissional em poucos minutos."
    },
    {
      question: "Posso conectar meu próprio domínio?",
      answer: "Sim! Nos planos pagos, você pode conectar seu próprio domínio às suas landing pages. Oferecemos também um subdomínio gratuito para todos os usuários (seunome.microlanding.com.br)."
    },
    {
      question: "Como funciona a integração com meios de pagamento?",
      answer: "O MicroLanding integra diretamente com os principais gateways de pagamento como Mercado Pago, PagSeguro e PayPal. Você configura sua conta uma única vez e pode começar a vender imediatamente, recebendo os valores diretamente na sua conta."
    },
    {
      question: "Quais tipos de produtos posso vender?",
      answer: "Você pode vender praticamente qualquer tipo de produto ou serviço: infoprodutos (cursos, e-books), serviços de consultoria, produtos físicos, assinaturas, e muito mais. Temos templates específicos para cada tipo de produto."
    },
    {
      question: "Posso cancelar minha assinatura a qualquer momento?",
      answer: "Sim! Não exigimos fidelidade. Você pode cancelar sua assinatura a qualquer momento sem taxas ou multas. Se cancelar antes do fim do período pago, você continuará com acesso aos recursos premium até o fim desse período."
    },
    {
      question: "Como recebo estatísticas da minha página?",
      answer: "Todas as landing pages criadas no MicroLanding vêm com estatísticas integradas. Você poderá acompanhar visitantes, taxa de conversão, tempo na página e outros dados importantes diretamente no seu dashboard."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas <span className="gradient-text">Frequentes</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Tire suas dúvidas sobre o MicroLanding
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium hover:text-micro-purple">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-12 text-center">
          <p className="mb-6 text-gray-600">
            Não encontrou sua resposta? Entre em contato com nosso suporte
          </p>
          <div className="inline-block gradient-bg text-white font-medium py-2 px-4 rounded-md hover:opacity-90 transition-opacity">
            Fale Conosco
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
