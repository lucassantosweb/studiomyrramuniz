import React from 'react';
import { Quote } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-24 relative bg-luxury-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          {/* Decorative Image/Pattern */}
          <div className="w-full md:w-1/2 relative">
             <div className="absolute -top-10 -left-10 w-24 h-24 border-t-2 border-l-2 border-luxury-gold opacity-50"></div>
             <img 
               src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=2574&auto=format&fit=crop" 
               alt="Salão Interior Detail" 
               className="w-full h-[500px] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute -bottom-10 -right-10 w-24 h-24 border-b-2 border-r-2 border-luxury-gold opacity-50"></div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-white">
              7 Anos de Dedicação à <span className="text-luxury-gold italic">Arte</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              Minha jornada na beleza começou com um sonho: revelar a melhor versão de cada mulher. Ao longo de 7 anos, me especializei nas mais avançadas técnicas de colorimetria e saúde capilar, garantindo resultados que unem estética e integridade dos fios.
            </p>

            <div className="bg-white/5 border-l-4 border-luxury-gold p-6 rounded-r-lg backdrop-blur-sm mt-8">
              <Quote className="text-luxury-gold mb-2 opacity-50" size={32} />
              <p className="font-serif text-2xl text-white italic">
                "Beleza, técnica e propósito caminham juntos por aqui."
              </p>
            </div>

            <div className="pt-4">
              <div className="flex items-center gap-8">
                <div>
                   <span className="block text-3xl font-serif text-luxury-gold">5k+</span>
                   <span className="text-sm text-gray-500 uppercase tracking-wider">Clientes Felizes</span>
                </div>
                <div>
                   <span className="block text-3xl font-serif text-luxury-gold">10+</span>
                   <span className="text-sm text-gray-500 uppercase tracking-wider">Certificações</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;