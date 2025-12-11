import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background with Dark Luxury Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=2574&auto=format&fit=crop" 
          alt="Luxury Salon Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/90 to-luxury-black/60"></div>
        {/* Decorative Gold Glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-luxury-gold/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="text-center lg:text-left space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Star size={14} className="text-luxury-gold fill-luxury-gold" />
            <span className="text-xs uppercase tracking-widest text-gray-300">Transformação & Autoestima</span>
          </div>
          
          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-tight text-white">
            A excelência em <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxury-gold via-luxury-goldLight to-luxury-gold">beleza</span> ao seu alcance.
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl font-light max-w-lg mx-auto lg:mx-0 leading-relaxed">
            Transformando cabelos e elevando sua autoestima através de técnicas exclusivas de mechas, loiros e morena iluminada.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <a 
              href="https://wa.me/5581999999999" 
              className="group relative px-8 py-4 bg-gradient-to-r from-luxury-gold to-luxury-bronze text-white font-semibold rounded-none skew-x-[-10deg] hover:skew-x-0 transition-transform duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <div className="skew-x-[10deg] group-hover:skew-x-0 flex items-center gap-2">
                Quero meu cabelo dos sonhos
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
            <a href="#servicos" className="px-8 py-4 text-white border-b border-white/30 hover:border-luxury-gold transition-colors font-light">
              Conhecer Serviços
            </a>
          </div>
        </div>

        {/* Right Glass Card (Hero Profile) */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative group w-full max-w-md">
            {/* Animated Border Gradient */}
            <div className="absolute -inset-1 bg-gradient-to-br from-luxury-gold via-transparent to-luxury-bronze rounded-2xl opacity-30 group-hover:opacity-60 blur transition duration-500"></div>
            
            <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl overflow-hidden">
              {/* Profile Image */}
              <div className="relative w-full h-[450px] rounded-xl overflow-hidden mb-6">
                <img 
                  src="https://placehold.co/400x500/222/D4AF37?text=Myrra+Muniz" 
                  alt="Myrra Muniz Profissional" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent h-32"></div>
                
                {/* Badge */}
                <div className="absolute top-4 right-4 bg-luxury-black/80 backdrop-blur-md border border-luxury-gold/30 px-4 py-2 rounded-full flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-luxury-gold animate-pulse"></div>
                   <span className="text-xs text-luxury-gold font-medium uppercase tracking-wider">Excelência</span>
                </div>
              </div>

              {/* Card Info */}
              <div className="text-center">
                <h3 className="font-serif text-3xl text-white mb-1">Myrra Muniz</h3>
                <p className="text-luxury-gold text-sm uppercase tracking-widest mb-4">Especialista em Mechas</p>
                <div className="h-[1px] w-16 bg-white/20 mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;