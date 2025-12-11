import React from 'react';
import { MapPin, Clock, Phone } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="localizacao" className="py-24 bg-neutral-900 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl text-white">Conheça nosso Espaço</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Info */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/5 hover:border-luxury-gold/50 transition-colors">
              <MapPin className="text-luxury-gold shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-white font-serif text-xl mb-2">Endereço</h4>
                <p className="text-gray-400 font-light">
                  Rua Coronel Dário Ferraz de Sá - 307<br/>
                  Barra de Jangada, Jaboatão dos Guararapes - PE
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/5 hover:border-luxury-gold/50 transition-colors">
              <Clock className="text-luxury-gold shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-white font-serif text-xl mb-2">Horário de Atendimento</h4>
                <p className="text-gray-400 font-light">
                  Terça a Sábado: 09:00 - 18:00<br/>
                  <span className="text-xs text-gray-500">Domingo e Segunda: Fechado</span>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white/5 rounded-lg border border-white/5 hover:border-luxury-gold/50 transition-colors">
              <Phone className="text-luxury-gold shrink-0 mt-1" size={24} />
              <div>
                <h4 className="text-white font-serif text-xl mb-2">Contato</h4>
                <p className="text-gray-400 font-light">
                  (81) 99999-9999<br/>
                  contato@studiomyrramuniz.com.br
                </p>
              </div>
            </div>
          </div>

          {/* Map Iframe */}
          <div className="order-1 lg:order-2 w-full h-[400px] relative rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 group">
             {/* Neon Glow effect behind map */}
             <div className="absolute inset-0 bg-luxury-gold/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
             
             <iframe 
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.123456789!2d-34.9!3d-8.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwMTInMDAuMCJTIDM0wrA1NCcwMC4wIlc!5e0!3m2!1spt-BR!2sbr!4v1600000000000!5m2!1spt-BR!2sbr" 
               width="100%" 
               height="100%" 
               style={{border:0, filter: 'grayscale(100%) invert(92%) contrast(83%)'}} 
               allowFullScreen={true} 
               loading="lazy"
               referrerPolicy="no-referrer-when-downgrade"
               title="Mapa Studio Myrra Muniz"
               className="grayscale hover:grayscale-0 transition-all duration-500"
             ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
