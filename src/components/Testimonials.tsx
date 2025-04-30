
import React from 'react';
import { cn } from '@/lib/utils';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
  className?: string;
}

const Testimonial = ({ name, role, content, image, className }: TestimonialProps) => (
  <div className={cn(
    "bg-white rounded-xl p-6 shadow-sm border border-gray-100",
    className
  )}>
    <div className="flex items-start mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover mr-4" />
      <div>
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-700">{content}</p>
    <div className="mt-4 flex">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ana Silva",
      role: "Coach de Carreira",
      content: "Em apenas 30 minutos criei uma landing page incrível para meu e-book, e o resultado foram 127 vendas na primeira semana. O MicroLanding superou todas as minhas expectativas!",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Ricardo Mendes",
      role: "Afiliado Digital",
      content: "Quando me falaram que eu poderia criar landing pages sem nenhum conhecimento técnico, não acreditei. Mas o MicroLanding provou que eu estava errado. É simplesmente fantástico!",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Juliana Costa",
      role: "Nutricionista",
      content: "Como profissional autônoma, sempre tive dificuldade em vender meus serviços online. Com o MicroLanding, consegui criar uma página de consultas que triplicou meus agendamentos.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D"
    },
    {
      name: "Carlos Eduardo",
      role: "Vendedor de Produtos Físicos",
      content: "Meu e-commerce estava estagnado até usar landing pages do MicroLanding para produtos específicos. A conversão aumentou 215% e economizei muito em anúncios.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww"
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="gradient-text">clientes</span> estão dizendo
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Milhares de empreendedores já estão usando o MicroLanding para 
            criar landing pages de alta conversão com facilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              content={testimonial.content}
              image={testimonial.image}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
