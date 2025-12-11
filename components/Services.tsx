import React from 'react';
import { Sparkles, Scissors, Sun, Zap, Plus } from 'lucide-react';

interface ServiceProps {
  title: string;
  price: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, price, description, icon }) => (
  <div className="group relative h-full">
    {/* Hover Glow */}
    <div className="absolute inset-0 bg-luxury-gold rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
    
    <div className="relative h-full bg-neutral-900/80 backdrop-blur-md border border-white/5 p-8 rounded-xl flex flex-col justify-between transition-all duration-300 group-hover:-translate-y-2 group-hover:border-luxury-gold/40">
      
      <div>
        <div className="w-14 h-14 bg-gradient-to-br from-neutral-800 to-black rounded-lg flex items-center justify-center mb-6 text-luxury-gold border border-white/5 shadow-inner">
          {icon}
        </div>
        
        <h3 className="font-serif text-2xl text-white mb-2">{title}</h3>
        <p className="text-luxury-gold font-medium mb-4">{price}</p>
        <p className="text-gray-400 font-light text-sm leading-relaxed mb-8 border-t border-white/5 pt-4">
          {description}
        </p>
      </div>

      <button className="w-full py-3 flex items-center justify-center gap-2 border border-luxury-gold/30 text-luxury-gold rounded text-sm uppercase tracking-wider hover:bg-luxury-gold hover:text-black transition-all duration-300">
        Agendar <Plus size={16} />
      </button>
    </div>
  </div>
);

const Services: React.FC = () => {
  const servicesData: ServiceProps[] = [
    {
      title: "Loiros Luxuosos",
      price: "A partir de R$ 550,00",
      description: "Técnicas exclusivas para atingir o tom perfeito com preservação total da saúde dos fios. Inclui tratamento reconstrutor.",
      icon: <Sun size={28} />
    },
    {
      title: "Morena Iluminada",
      price: "A partir de R$ 450,00",
      description: "Nuances sutis e sofisticadas que trazem luz e movimento para cabelos escuros, sem perder a naturalidade.",
      icon: <Sparkles size={28} />
    },
    {
      title: "Extensão Capilar",
      price: "Sob Avaliação",
      description: "Especialidade da casa. Aplicação de fita adesiva imperceptível para volume e comprimento dos sonhos.",
      icon: <Zap size={28} />
    },
    {
      title: "Corte & Tratamento",
      price: "R$ 149,90",
      description: "Design de corte visagista alinhado a um protocolo de nutrição profunda para revitalizar seus fios.",
      icon: <Scissors size={28} />
    }
  ];

  return (
    <section id="servicos" className="py-24 bg-luxury-black relative">
      {/* Background radial gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-luxury-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-luxury-gold uppercase tracking-[0.3em] text-xs font-semibold">Nossas Especialidades</span>
          <h2 className="font-serif text-4xl md:text-5xl text-white mt-4">Menu de Serviços</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;